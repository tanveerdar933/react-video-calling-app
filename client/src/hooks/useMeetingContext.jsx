import { useContext } from 'react';
import { MeetingContext } from '../contexts/MeetingContext';

export const useMeetingContext = () => {
  const context = useContext(MeetingContext);
  if (!context) {
    throw new Error(
      "useMeetingContext must be used within a MeetingContextProvider"
    );
  }
  return context;
};