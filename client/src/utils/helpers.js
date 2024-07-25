import { nanoid } from 'nanoid';

export const generateRoomName = () => `${nanoid(10)}-${Date.now()}`;