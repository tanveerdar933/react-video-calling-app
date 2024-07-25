import React, { useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import JitsiHome from './JitsiHome';
import JitsiMeetScreen from './JitsiMeetScreen';
//context
import { MeetingContextProvider } from './MeetingContext';

const App = () => {
  return (
    <MeetingContextProvider>
      <BrowserRouter>
        {/* <Suspense fallback={<SuspenseLoader />}> */}
        <Routes>
          <Route path="/" element={<JitsiHome />} />
          <Route path="/join" element={<JitsiMeetScreen />} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter >
    </MeetingContextProvider>
  )
};

export default App;
