import React from 'react';
import { Typography } from '@mui/material';

export default function Submissions(props) {

    console.log(props.posts)

    return (
        <>
            {props.posts.map((post) => (
                (post.data.liked)
                    ? (
                        <Typography key={post.id} paragraph={false} variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
                            {post.data.firstName} {post.data.lastName} - {post.data.email}
                        </Typography>)
                    : null
            ))}
        </>
    );
}