import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingMeeting = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingMeeting