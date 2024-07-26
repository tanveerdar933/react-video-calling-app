import { nanoid } from 'nanoid';

export const generateRoomName = () => `${(new Date()).getTime()}`;