import { createContext, useContext, useState } from 'react';

export const MeetingContext = createContext();

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