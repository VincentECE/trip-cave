import { io, Socket } from "socket.io-client";
import { useStore } from "../store";
import { PI_CLIENT_HOST_IP } from "../../../app-values";
import { contentMap } from "../../../pi-server/content-map";

// const serverUrl: string = process.env.REACT_APP_PI_URL || 'http://localhost:3001';
// const serverUrl: string = "http://localhost:3001";

const { pauseVideo, playVideo, goFullScreen, playNextVideo } = useStore.getState();

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
  });

  clientSocket.on("playVideo", playVideo);

  clientSocket.on("pauseVideo", pauseVideo);

  clientSocket.on("goFullScreen", goFullScreen);

  clientSocket.on("playSelectedScene", (sceneId: number) => {
    const contentInfo = contentMap[sceneId];
    playNextVideo(contentInfo.videoUrl);
  });

  clientSocket.on("playNow", playVideo);
};
