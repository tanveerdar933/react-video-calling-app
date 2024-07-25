import { createContext, useContext, useState } from 'react';

const MeetingContext = createContext();

export const MeetingContextProvider = ({ children }) => {
  const [roomID, setRoomID] = useState('');

  return (
    <MeetingContext.Provider value={{
      roomID,
      setRoomID,
    }}>
      {children}
    </MeetingContext.Provider>
  )
};

export const useMeeting = () => {
  return useContext(MeetingContext);
};

export const useMeetingContext = () => {
  const context = useContext(MeetingContext);
  if (!context) {
    throw new Error(
      "useMeetingContext must be used within a MeetingContextProvider"
    );
  }
  return context;
};