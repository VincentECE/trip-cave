import { v4 as uuid } from "uuid";
import { Socket, Server } from "socket.io";
import { piClientSocket } from "../socket-handlers";
import { contentMap } from "../../content-map";

export let mobileClientSocket: Socket;

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
    console.log("server health check received.. pinging back");
    mobileClientSocket.emit("serverStatus", { status: "Im good" });
  });

  mobileClientSocket.on("playVideo", () => {
    console.log("playing video");
    piClientSocket.emit("playVideo");
  });

  mobileClientSocket.on("pauseVideo", () => {
    console.log("Pausing video");
    piClientSocket.emit("pauseVideo");
  });

  mobileClientSocket.on("goFullScreen", () => {
    console.log("going full screen");
    piClientSocket.emit("goFullScreen");
  });

  mobileClientSocket.on("playNextVideo", () => {
    console.log("switching video");
    piClientSocket.emit("playNextVideo");
  });

  mobileClientSocket.on("getScenes", ({ page, limit }) => {
    //todo: complete paginate functionality eventually
    // const contentLength = contentMap.length - 1;

    mobileClientSocket.emit("getScenes", contentMap);
    //todo: getScenes should emit only to whoever called getScenes eventually..
  });
};
