import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Submissions from './Submissions';

export default function Content() {
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
        <Submissions />
    </Box>
  );
}
