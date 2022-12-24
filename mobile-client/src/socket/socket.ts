import { io, Socket } from "socket.io-client";
// import { useStore } from "../store";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
// const serverUrl: string = "http://localhost:3002";
const serverUrl: string = "http://192.168.86.34:3002"; //make sure this is the url to the express server and port

export let mobileClientSocket: Socket;

export const establishConnection = () => {
  mobileClientSocket = io(serverUrl);

  mobileClientSocket.on("connect_error", () => {
    console.log("couldn't connect to server");
  });

  mobileClientSocket.on("connect", () => {
    console.log("connected to server");
  });

  mobileClientSocket.on("disconnect", () => {
    console.log("disconnected from server");
  });

  mobileClientSocket.on("serverStatus", (data) => {
    const { status } = data;
    console.log(status);
  });
};
