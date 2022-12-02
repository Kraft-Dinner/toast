import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close';

import { onMessage } from './service/mockServer';
import { useState } from 'react';

export default function Notification() {
    const [open, setOpen] = useState(false);

    const handleServerMsg = () => {
        setOpen(true);
    };

    const handleLike = () => {
        console.log("Post was liked");
        setOpen(false);
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
                message="Testing"
                action={likeAction}
            />
        </div>
    );
}