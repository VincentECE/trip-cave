import { io, Socket } from "socket.io-client";
import { useStore } from "../store";
import { PI_CLIENT_HOST_IP, PI_CLIENT_PORT } from "../../../app-values";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
// const serverUrl: string = "http://localhost:3001";

const {
  playVideo1,
  pauseVideo1,
  playNextVideo,
  pauseVideo,
  playVideo,
  playNow,
} = useStore.getState();

export let clientSocket: Socket;

export const establishConnection = () => {
  // clientSocket = io(PI_CLIENT_HOST_IP);
  clientSocket = io(`localhost:${PI_CLIENT_PORT}`);

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
    playVideo();
  });

  clientSocket.on("pauseVideo", () => {
    console.log("Video should be paused");
    pauseVideo();
  });

  clientSocket.on("goFullScreen", () => {
    console.log("I should be fullScreen...");
    //todo: have some fullscreen logic here
  });

  clientSocket.on("playNextVideo", () => {
    playNextVideo();
    //todo: playNextVideo will take in a string that's a URL to the next video
  });

  clientSocket.on("playNow", (videoUrl) => {
    playNow(videoUrl);
  });
};
