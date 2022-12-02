import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close';

export default function Notification({isOpen, postData, onLike, onClose}) {

    const likeAction = (
        <>
            <Button color="secondary" size="small" onClick={onLike}>
                Like
            </Button>
            <IconButton
                size="small"    
                aria-label="close"
                color="inherit"
                onClick={onClose}
            >
                <Close fontSize="small"/>
            </IconButton>
        </>
    );

    return (
        <div>
            <Snackbar
                open={isOpen}
                message={(postData === undefined) ? '' : postData.firstName}
                action={likeAction}
            />
        </div>
    );
}