import { v4 as uuid } from "uuid";

export const piClientHandler = (io, socket) => {
  const socketId = socket.id;

  socket.on("piClientConnect", () => {
    console.log("the pi client has connected!");
  });
};
