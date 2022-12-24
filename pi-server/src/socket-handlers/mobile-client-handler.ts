import { v4 as uuid } from "uuid";
import { Socket, Server } from "socket.io";
import { piClientSocket } from "../socket-handlers";

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

  mobileClientSocket.on("goFullScreen", () => {
    console.log("going full screen");
    piClientSocket.emit("goFullScreen");
  });
};
