import React from 'react';
import { Button, Container, Grid, Typography, Box, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
//components
import InputField from "./components/InputField/InputField3";
//helpers
import { generateRoomName } from './utils/helpers';

const JitsiHome = () => {
  const navigate = useNavigate();
  const [subjectName, setSubjectName] = React.useState('');

  const handleNewMeeting = () => {
    const roomID = generateRoomName();
    navigate(`/join?id=${roomID}&sub=${subjectName}`);
  }

  return (
    <Container sx={{ py: 10 }}>
      <Grid container rowGap={5}>
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight={700}>
            Welcome to Video Calling App
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexFlow: "column", gap: 4, maxWidth: "500px" }}>
            <Box sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
              <InputField
                name="subject_name"
                value={subjectName}
                placeholder="Write the subject"
                onChange={(e) => setSubjectName(e.target.value)}
              />
              <Button
                variant="contained"
                size="large"
                onClick={handleNewMeeting}
                sx={{ maxWidth: "300px" }}
              >
                Create New Meeting
              </Button>
            </Box>
            <Divider sx={{ fontSize: "20px" }}>or</Divider>
            <Box>
              <Typography sx={{ mb: 2, fontWeight: 600 }}>
                Join meeting by room ID
              </Typography>
              <InputField
                name="room_id"
                placeholder="Enter Room ID"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default JitsiHome