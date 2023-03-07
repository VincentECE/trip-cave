import { io, Socket } from "socket.io-client";
import { useStore } from "../store";
import { PI_CLIENT_HOST_IP } from "../../../app-values";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
// const serverUrl: string = "http://localhost:3001";

const {
  pauseVideo,
  playVideo,
  goFullScreen,
  playNextVideo
} = useStore.getState();

export let clientSocket: Socket;

export const establishConnection = () => {
  // clientSocket = io(PI_CLIENT_HOST_IP);
  clientSocket = io(PI_CLIENT_HOST_IP);

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
     goFullScreen();
  });

  clientSocket.on("playNextVideo", (videoUrl?: string) => {
    console.log(videoUrl);
    playNextVideo(videoUrl);
  });

  clientSocket.on("playNow", () => {
    playVideo();
  });
};
