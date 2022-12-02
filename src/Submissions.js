import { Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Submissions() {

    const [posts, updatePosts] = useState([]);

    useEffect(() => {
            fetchLikedFormSubmissions()
                .then((data) => {
                    updatePosts(data.formSubmissions);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }, []);

    return (
        <>
            {posts.map((post) => (
                <Typography key={post.id} paragraph={false} variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
                    {post.data.firstName} {post.data.lastName} - {post.data.email}
                </Typography>
            ))}
        </>
    );
}