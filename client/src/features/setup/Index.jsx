import React, { useState } from 'react';
import { Button, Container, Grid, Typography, Box, Divider, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
//components
import InputField from "../../components/InputField/InputField3";
//helpers
import { generateRoomName } from '../../utils/helpers';
//assets
import { VIDEO_MEET_LOGO } from "../../assets";
//apis
import { MeetAPI } from "../../api";

const Index = () => {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [subjectName, setSubjectName] = useState('');

  const getJWTMeetToken = async () => {
    setIsLoading(true);
    try {
      const response = await MeetAPI.getJwtToken(JSON.stringify({
        isModerator: true
      }));
      setIsLoading(false);
      return response;
    }
    catch (error) {
      setIsLoading(false);
      console.log("Error in getJWTMeetToken:", error);
      throw error;
    }
  }

  const handleNewMeeting = () => {
    getJWTMeetToken()
      .then(res => {
        console.log(res);
        if (res?.token) {
          navigate(`/join`, {
            state: {
              token: res?.token,
              subject: subjectName || "New Meeting"
            }
          });
        }
        else {
          console.log("token not recieved in res?.token:", res);
        }
      })
      .catch(err => {
        console.log("Error in handleNewMeeting:", err);
      });
    // const roomID = generateRoomName();
    // navigate(`/join?id=${roomID}&sub=${subjectName}`);
  }

  const handleJoinMeeting = () => {
    // navigate(`/join?id=${roomID}`);
  }

  return (
    <Container sx={{ py: 10 }}>
      <Grid container rowGap={5}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={VIDEO_MEET_LOGO}
            alt="video meet logo"
            sx={{
              width: "70px",
              borderRadius: "20px",
            }}
          />
          <Typography variant="h4" fontWeight={700} sx={{ mt: 4 }}>
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
                {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Create New Meeting"}
              </Button>
            </Box>
            <Divider sx={{ fontSize: "20px" }}>or</Divider>
            <Box sx={{ display: "flex", flexFlow: "column", gap: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>
                Join meeting by room ID
              </Typography>
              <InputField
                name="room_id"
                value={roomID}
                placeholder="Enter Room ID"
                onChange={(e) => setRoomID(e.target.value)}
              />
              <Button
                variant="contained"
                size="large"
                onClick={handleJoinMeeting}
                sx={{ maxWidth: "300px" }}
              >
                Join Meeting
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index