import { io, Socket } from "socket.io-client";
import { useStore } from "../store";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
const serverUrl: string = "http://localhost:3001";

const { playVideo1, pauseVideo1 } = useStore.getState();

export let clientSocket: Socket;

export const establishConnection = () => {
  clientSocket = io(serverUrl);

  clientSocket.on("connect_error", () => {
    console.log("couldn't connect to server");
  });

  clientSocket.on("connect", () => {
    console.log("connected to server");
  });

  clientSocket.on("disconnect", () => {
    console.log("disconnected from server");
  });

  clientSocket.on("serverStatus", (data) => {
    const { status } = data;
    console.log(status);
  });

  clientSocket.on("playVideo", () => {
    console.log("I should be playing something...");
    playVideo1();
  });

  clientSocket.on("pauseVideo", () => {
    console.log("Video should be paused");
    pauseVideo1();
  });

  clientSocket.on("goFullScreen", () => {
    console.log("I should be fullScreen...");
  });
};
