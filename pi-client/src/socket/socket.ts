import { io, Socket } from "socket.io-client";
import { useStore } from "../store";
import { PI_CLIENT_HOST_IP } from "../../../app-values";
import { contentMap } from "../../../pi-server/content-map";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
// const serverUrl: string = "http://localhost:3001";

const { pauseVideo, playVideo, goFullScreen, playNextVideo } =
  useStore.getState();

export let clientSocket: Socket;

export const establishConnection = () => {
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

  clientSocket.on("playSelectedScene", (sceneId: number) => {
    const contentInfo = contentMap[sceneId];
    console.log(`Playing Scene ${contentInfo.title}`);
    playNextVideo(contentInfo.videoUrl);
  });

  clientSocket.on("playNow", () => {
    console.log("play now from socket");
    playVideo();
  });
};
