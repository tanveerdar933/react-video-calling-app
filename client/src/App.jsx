import React, { useRef, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//pages
const SetupScreen = lazy(() => import('./features/setup/Index'));
const MeetScreen = lazy(() => import('./features/meet/Index'));
//context
import { MeetingContextProvider } from './contexts/MeetingContext';
//supense loader
import SuspenseLoader from './components/loader/SuspenseLoader';

const App = () => {
  return (
    <MeetingContextProvider>
      <BrowserRouter>
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/" element={<SetupScreen />} />
            <Route path="/join" element={<MeetScreen />} />
          </Routes>
        </Suspense>
      </BrowserRouter >
    </MeetingContextProvider>
  )
};

export default App;
