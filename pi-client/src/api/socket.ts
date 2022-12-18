import { io } from 'socket.io-client';
import { useStore } from '../store';

const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';

export const establishConnection = () => {
  const socket = io(serverUrl);

        socket.on('connect_error', () => {
        console.log("couldn't connect to server");
      });

      socket.on('connect', () => {
        console.log('connected to server');
      });

      socket.on('disconnect', () => {
        console.log('disconnected from server')
      });
}
