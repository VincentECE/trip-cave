import { v4 as uuid } from "uuid";
import { Socket, Server } from "socket.io";
import { piClientSocket } from "../socket-handlers";
import { contentMap } from "../../content-map";
import os from "os";

export type Scene = {
  //todo: clean up this jawn later
  title: string;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  categories: string[];
  sceneId: number;
  mood?: string[];
};

export type SceneStatus = {
  scene: Scene;
  status: "playing" | "paused";
};

export let mobileClientSocket: Socket;
export let sceneStatus: SceneStatus; //todo: this and the currentStatus might be moved to mongo
//todo: sceneStatus doesn't check the pi-client to see what's actually happening. Make sure to ring in to check
export const mobileClientHandler = (io: Server, socket: Socket) => {
  const socketId = socket.id;
  mobileClientSocket = socket;

  mobileClientSocket.on("connect", () => {
    console.log("Generic connection from an IP");
  });

  mobileClientSocket.on("piClientConnect", () => {
    console.log("the pi client has connected!");
  });

  mobileClientSocket.on("ServerHealthCheck", () => {
    console.log("server health check received.. pinging back dawk");
    console.log("osInterfaces: ", os.networkInterfaces());
    mobileClientSocket.emit("serverStatus", { status: "Im good" });
  });

  mobileClientSocket.on("playVideo", () => {
    console.log("playing video");
    piClientSocket.emit("playVideo");
  });

  mobileClientSocket.on("pauseVideo", () => {
    console.log("Pausing video");
    sceneStatus.status = "paused";
    piClientSocket.emit("pauseVideo");
    mobileClientSocket.emit("updateSceneStatus", sceneStatus);
  });

  mobileClientSocket.on("goFullScreen", () => {
    console.log("going full screen");
    piClientSocket.emit("goFullScreen");
  });

  mobileClientSocket.on("playNextVideo", () => {
    console.log("switching video");
    piClientSocket.emit("playNextVideo");
  });

  // playSelectedVideo
  mobileClientSocket.on("playSelectedScene", (sceneId: number) => {
    if (!contentMap[sceneId]) {
      console.error("Tried to play a sceneId that doesnt exist");
      return; //todo: add error handling
    }

    sceneStatus = {
      scene: contentMap[sceneId], //sets the current status and stuff
      status: "playing",
    };

    mobileClientSocket.broadcast.emit("updateSceneStatus", sceneStatus);
    console.log("playSelectedScene scene:", sceneStatus);

    piClientSocket.emit("playSelectedScene", sceneId);
  });
};
