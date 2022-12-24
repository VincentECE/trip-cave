import { io, Socket } from "socket.io-client";
import { useStore } from "../store";
import { ghettoPlay, ghettoFullScreen } from "../App";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
const serverUrl: string = "http://localhost:3001";

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
    ghettoPlay();
  });

  clientSocket.on("goFullScreen", () => {
    console.log("I should be fullScreen...");
    ghettoFullScreen("video");
  });
};
