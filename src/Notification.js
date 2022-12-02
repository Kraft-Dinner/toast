import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close';

import { onMessage, saveLikedFormSubmission } from './service/mockServer';
import { useState, useEffect } from 'react';

export default function Notification() {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({});

    const handleServerMsg = (postData) => {
        setPost({
            ...post,
            ...postData,
            liked: true
        });
    };

    useEffect(() => {
        if (Object.keys(post).length === 0) {
            return;
        }
        setOpen(true);
    }, [post]);

    const handleLike = () => {
        saveLikedFormSubmission(post)
        .then(() => {
            setOpen(false);
        })
        .catch((err) => {
            console.log(err.message)
        });
    };

    const handleClose = (event, reason) => {
        // We don't want the snackbar to close unless the user explicitly closed it via the close icon.
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const likeAction = (
        <>
            <Button color="secondary" size="small" onClick={handleLike}>
                Like
            </Button>
            <IconButton
                size="small"    
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small"/>
            </IconButton>
        </>
    );

    onMessage(handleServerMsg);

    return (
        <div>
            <Snackbar
                open={open}
                onClose={handleClose}
                message={(Object.keys(post).length === 0) ? '' : post.data.firstName}       // FIX: Replace this with formatted content and remove conditional - Testing only
                action={likeAction}
            />
        </div>
    );
}