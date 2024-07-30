import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Grid, ToggleButton } from '@mui/material';
import { BackHandRounded } from '@mui/icons-material';
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';
//components
import LoadingMeetings from "./components/LoadingMeeting";
//constants
const APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const APP_ID = import.meta.env.VITE_APP_APPID;
const JWT_TOKEN = import.meta.env.VITE_APP_JWT_TOKEN;

const Index = () => {
  //get room id from url query params
  const location = useLocation();
  const navigate = useNavigate();
  // set it in the state
  const [roomName, setRoomName] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [subMatter, setSubMatter] = useState("");
  const [customConfig, setCustomConfig] = useState({});
  //meetings states
  const meetIframeRef = useRef();
  const [handRaised, setHandRaised] = useState(false);

  useEffect(() => {
    // const queryParams = new URLSearchParams(location.search);
    // const id = queryParams.get('id');
    // const sub = queryParams.get('sub');
    // if (id) {
    //   setRoomID(id);
    // }
    // if (sub) {
    //   setSubMatter(sub);
    // }
    if (location?.state?.token) {
      setJwtToken(location.state.token);
    }
    if (location?.state?.subject) {
      setRoomName(location.state.subject);
    }
  }, []);

  const apiRef = useRef();
  const [logItems, updateLog] = useState([]);
  const [showNew, toggleShowNew] = useState(false);
  const [knockingParticipants, updateKnockingParticipants] = useState([]);

  const printEventOutput = payload => {
    updateLog(items => [...items, JSON.stringify(payload)]);
  };

  const handleAudioStatusChange = (payload, feature) => {
    if (payload.muted) {
      updateLog(items => [...items, `${feature} off`])
    } else {
      updateLog(items => [...items, `${feature} on`])
    }
  };

  const handleChatUpdates = payload => {
    if (payload.isOpen || !payload.unreadCount) {
      return;
    }
    apiRef.current.executeCommand('toggleChat');
    updateLog(items => [...items, `you have ${payload.unreadCount} unread messages`])
  };

  const handleKnockingParticipant = payload => {
    updateLog(items => [...items, JSON.stringify(payload)]);
    updateKnockingParticipants(participants => [...participants, payload?.participant])
  };

  const resolveKnockingParticipants = condition => {
    knockingParticipants.forEach(participant => {
      apiRef.current.executeCommand('answerKnockingParticipant', participant?.id, condition(participant));
      updateKnockingParticipants(participants => participants.filter(item => item.id === participant.id));
    });
  };

  const HandleMeetingIframeRef = iframeRef => {
    // iframeRef.style.border = '10px solid #3d3d3d';
    // iframeRef.style.background = '#3d3d3d';
    // iframeRef.style.height = '400px';
    // iframeRef.style.marginBottom = '20px';
    iframeRef.style.border = 'none';
    iframeRef.style.background = '#040404';
    iframeRef.style.height = '99vh';
    meetIframeRef.current = iframeRef;
  };

  const handleDisplayNameChange = displayName => {
    updateLog(items => [...items, `display name changed to ${displayName}`]);
  };

  // const handleJitsiIFrameRef2 = iframeRef => {
  //   iframeRef.style.marginTop = '10px';
  //   iframeRef.style.border = '10px dashed #df486f';
  //   iframeRef.style.padding = '5px';
  //   iframeRef.style.height = '400px';
  // };

  // const handleJaaSIFrameRef = iframeRef => {
  //   iframeRef.style.border = '10px solid #3d3d3d';
  //   iframeRef.style.background = '#3d3d3d';
  //   iframeRef.style.height = '400px';
  //   iframeRef.style.marginBottom = '20px';
  // };

  const handleReadyToClose = () => {
    navigate('/');
  };

  const handleApiReady = apiObj => {
    apiRef.current = apiObj;
    //when meeting closes
    apiRef.current.on('readyToClose', handleReadyToClose);
    // apiRef.current.on('displayNameChange', handleDisplayNameChange);

    // apiRef.current.on('knockingParticipant', handleKnockingParticipant);
    // apiRef.current.on('audioMuteStatusChanged', payload => handleAudioStatusChange(payload, 'audio'));
    // apiRef.current.on('videoMuteStatusChanged', payload => handleAudioStatusChange(payload, 'video'));
    // apiRef.current.on('raiseHandUpdated', printEventOutput);
    // apiRef.current.on('titleViewChanged', printEventOutput);
    // apiRef.current.on('chatUpdated', handleChatUpdates);
    // apiRef.current.on('knockingParticipant', handleKnockingParticipant);
  };



  // const generateRoomName = () => `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`;

  // Multiple instances demo
  // const renderNewInstance = () => {
  //   if (!showNew) {
  //     return null;
  //   }

  //   return (
  //     <JitsiMeeting
  //       roomName={generateRoomName()}
  //       getIFrameRef={handleJitsiIFrameRef2} />
  //   );
  // };

  // const renderButtons = () => (
  //   <div style={{ margin: '15px 0' }}>
  //     <div style={{
  //       display: 'flex',
  //       justifyContent: 'center'
  //     }}>
  //       <button
  //         type='text'
  //         title='Click to execute toggle raise hand command'
  //         style={{
  //           border: 0,
  //           borderRadius: '6px',
  //           fontSize: '14px',
  //           background: '#f8ae1a',
  //           color: '#040404',
  //           padding: '12px 46px',
  //           margin: '2px 2px'
  //         }}
  //         onClick={() => apiRef.current.executeCommand('toggleRaiseHand')}>
  //         Raise hand
  //       </button>
  //       <button
  //         type='text'
  //         title='Click to approve/reject knocking participant'
  //         style={{
  //           border: 0,
  //           borderRadius: '6px',
  //           fontSize: '14px',
  //           background: '#0056E0',
  //           color: 'white',
  //           padding: '12px 46px',
  //           margin: '2px 2px'
  //         }}
  //         onClick={() => resolveKnockingParticipants(({ name }) => !name.includes('test'))}>
  //         Resolve lobby
  //       </button>
  //       <button
  //         type='text'
  //         title='Click to execute subject command'
  //         style={{
  //           border: 0,
  //           borderRadius: '6px',
  //           fontSize: '14px',
  //           background: '#df486f',
  //           color: 'white',
  //           padding: '12px 46px',
  //           margin: '2px 2px'
  //         }}
  //         onClick={() => apiRef.current.executeCommand('subject', 'New Subject')}>
  //         Change subject
  //       </button>
  //       <button
  //         type='text'
  //         title='Click to create a new JitsiMeeting instance'
  //         style={{
  //           border: 0,
  //           borderRadius: '6px',
  //           fontSize: '14px',
  //           background: '#3D3D3D',
  //           color: 'white',
  //           padding: '12px 46px',
  //           margin: '2px 2px'
  //         }}
  //         onClick={() => toggleShowNew(!showNew)}>
  //         Toggle new instance
  //       </button>
  //     </div>
  //   </div>
  // );

  const renderLog = () => logItems.map(
    (item, index) => (
      <div
        style={{
          fontFamily: 'monospace',
          padding: '5px'
        }}
        key={index}>
        {item}
      </div>
    )
  );

  // const renderSpinner = () => (
  //   <div style={{
  //     fontFamily: 'sans-serif',
  //     textAlign: 'center'
  //   }}>
  //     Loading..
  //   </div>
  // );

  // const handleHandRaised = () => {
  //   // const details = await apiRef.current.getParticipantsInfo();
  //   setHandRaised(prevState => !prevState);
  //   // console.log(details);
  //   apiRef.current.executeCommand('toggleRaiseHand');
  // };

  return (
    <Box sx={{ bgcolor: "black", height: "100vh", position: "relative" }}>
      {/* <JitsiMeeting
        // roomName={generateRoomName()}
        roomName={room_id}
        // domain={APP_DOMAIN}
        spinner={LoadingMeetings}
        configOverwrite={{
          subject: subMatter || 'New Meeting',
          hideConferenceSubject: false
        }}
        lang='en'
        onApiReady={externalApi => handleApiReady(externalApi)}
        onReadyToClose={handleReadyToClose}
        getIFrameRef={HandleMeetingIframeRef}
      /> */}
      {/* <JaaSMeeting
                roomName={generateRoomName()}
                // Update this with the `8x8.vc` or `stage.8x8.vc` version of interest
                // and avoid mixing up different domains and release versions
                // on the same page at the same time, as only the first
                // external api script will be loaded.
                // release = 'release-1234'

                useStaging={true}
                getIFrameRef={handleJaaSIFrameRef} /> */}
      <JaaSMeeting
        appId={APP_ID}
        roomName={roomName}
        // domain={APP_DOMAIN}
        spinner={LoadingMeetings}
        // useStaging={true}
        // configOverwrite={{
        //   subject: subMatter || 'New Meeting'
        // }}
        lang='en'
        jwt={jwtToken}
        onApiReady={externalApi => handleApiReady(externalApi)}
        onReadyToClose={handleReadyToClose}
        getIFrameRef={HandleMeetingIframeRef} />
      {/* {renderButtons()} */}
      {/* {renderNewInstance()} */}
      {/* <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          minHeight: "400px",
          width: "300px",
          bgcolor: "white",
          padding: "20px",
          borderRadius: "0 0 0 10px",
        }}
      >
        {renderLog()}
      </Box> */}
      {/* {renderLog()} */}
    </Box>
  );
}

export default Index