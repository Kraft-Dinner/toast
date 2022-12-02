import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Submissions from './Submissions';
import Notification from './Notification';

import { saveLikedFormSubmission, fetchLikedFormSubmissions, onMessage } from './service/mockServer';

export default function Content() {

  /* State for our Notification child component */
  const [isToastOpen, setToastOpen] = useState(false);
  const [newPostData, setNewPostData] = useState({});

  /* State for our Submissions child component */
  const [posts, updatePosts] = useState([]);

  /* Show our Notification any time we get a new post submissions */
  useEffect(() => {
    if (Object.keys(newPostData).length === 0) return;
    setToastOpen(true);
  }, [newPostData]);

  /* Load our liked form submissions on the first render */
  useEffect(() => {
    updateLikedPosts();
  }, []);

  const updateLikedPosts = () => {
    fetchLikedFormSubmissions()
        .then((data) => {
            updatePosts(data.formSubmissions);
        })
        .catch((err) => {
            console.log(err.message);
        });
  }

  const handleServerMsg = (postData) => {
    setNewPostData({
      ...newPostData,
      ...postData
    });
  };

  const handleLike = () => {
    let updatedPostData = {...newPostData, data: {...newPostData.data, liked: true}};
    console.log({updatedPostData});
    saveLikedFormSubmission(updatedPostData)
    .then(() => {
        setToastOpen(false);
        updateLikedPosts();
    })
    .catch((err) => {
        console.log(err.message)
    });
};

const handleClose = (event, reason) => {
    // We don't want the notification to close unless the user explicitly closed it via the close icon.
    if (reason === 'clickaway') {
        return;
    }

    setToastOpen(false);
  };

  onMessage(handleServerMsg);

  return (
    <>
      <Box sx={{marginTop: 3}}>
        <Typography variant="h4">Liked Form Submissions</Typography>
          <Submissions posts={posts} />
      </Box>
      <Notification isOpen={isToastOpen} postData={newPostData.data} onLike={handleLike} onClose={handleClose} />
    </>
  );
}
