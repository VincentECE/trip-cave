import { v4 as uuid } from "uuid";
import { Socket, Server } from "socket.io";

export let piClientSocket: Socket;

export const piClientHandler = (io: Server, socket: Socket) => {
  const socketId = socket.id;
  piClientSocket = socket;

  piClientSocket.on("connect", () => {
    console.log("Generic connection from an IP");
  });

  piClientSocket.on("piClientConnect", () => {
    console.log("the pi client has connected!");
  });

  piClientSocket.on("ServerHealthCheck", () => {
    console.log("server health check received.. pinging back dawk");
    piClientSocket.emit("serverStatus", { status: "Im good" });
  });
};
