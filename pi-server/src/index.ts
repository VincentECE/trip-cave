import express from "express";
require("dotenv").config();
import { PI_CLIENT_PORT, MOBILE_CLIENT_PORT } from "../../app-values";
import { piClientHandler, mobileClientHandler } from "./socket-handlers";
import path from "path";
const piClientApp = express();
const mobileClientApp = express();
import http from "http";
const piClient_server = http.createServer(piClientApp);
const mobileClient_server = http.createServer(mobileClientApp);
import { Server, Socket } from "socket.io";
import { mobileClientRouter } from "./routes";
import cors from "cors";
// require("./db");
// const PORT = process.env.PORT; //todo: add .env file
mobileClientApp.use(cors()); //todo: restrict origin
mobileClientApp.use(express.static("public/thumbnail-images"));
mobileClientApp.use(express.urlencoded({ extended: true }));
// mobileClientApp.use(
//   express.static(
//     path.join(
//       "C:/Users/vtran/Documents/SoftwareProjects/trip-cave/pi-server/dist/mobile-client-static-files"
//     )
//   )
// ); //static file stuff

mobileClientApp.use(
  express.static(
    path.resolve(__dirname, "clients-static-files", "mobile-client")
  )
); //static file stuff

mobileClientApp.use(mobileClientRouter);
piClientApp.use(express.static("private/video-loops"));

piClientApp.use(
  express.static(path.resolve(__dirname, "clients-static-files", "pi-client"))
); //static file stuff

/* @@@@@@@@ Socket.io stuff @@@@@@@*/
//sets up socket.io
const piClient_io: Server = new Server(piClient_server, {
  cors: {
    origin: "*", //todo: strictly only allow the correct addresses
    credentials: false,
  },
  pingInterval: 2000,
  pingTimeout: 5000,
});

const mobileClient_io: Server = new Server(mobileClient_server, {
  cors: {
    origin: "*", //todo: strictly only allow the correct addresses
    credentials: false,
  },
  pingInterval: 2000,
  pingTimeout: 5000,
});

//registers all socket connections
const PiOnConnection = (socket: Socket) => {
  piClientHandler(piClient_io, socket);
  console.log("(src/index.ts) Something connected to the pi server!");
};

const mobileClientConnection = (socket: Socket) => {
  mobileClientHandler(mobileClient_io, socket);
  console.log("Something connected to the mobile client server!");
};

piClient_io.on("connection", PiOnConnection);
mobileClient_io.on("connection", mobileClientConnection);

/* @@@@@@@@  END Socket.io stuff @@@@@@@*/

piClient_server.listen(PI_CLIENT_PORT, () => {
  console.log(`piClient listening on :${PI_CLIENT_PORT}`);
});

mobileClient_server.listen(MOBILE_CLIENT_PORT, () => {
  console.log(`mobileClient listening on ${MOBILE_CLIENT_PORT}`);
});

// mobileClientApp.listen(
//   3003,
//   "192.168.86.80",
//   () => {
//     console.log("jawn:");
//   },
//   function () {
//     console.log(`listening on port ${3003}`);
//   }
// );
