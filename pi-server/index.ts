import express from "express";
require("dotenv").config();
import { PORT } from "./app-values";
import { piClientHandler } from "./src/socket-handlers";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server, Socket } from "socket.io";
// require("./db");
// const PORT = process.env.PORT; //todo: add .env file
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: false,
  },
  pingInterval: 2000,
  pingTimeout: 5000,
});

// app.use("/", pageRoutes);

//registers all socket connections
const onConnection = (socket: Socket) => {
  piClientHandler(io, socket);
};

io.on("connection", onConnection);

server.listen(PORT, () => {
  console.log(`listening on :${PORT}`);
});
