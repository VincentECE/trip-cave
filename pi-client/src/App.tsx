import logo from "./assets/react.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { VideoPlayer1, VideoPlayer2 } from "./components";
import { useStore } from "./store";
import { establishConnection, clientSocket } from "./socket";
import { VideoPage } from "./features";
import { QRCodeSVG } from "qrcode.react";
import { MOBILE_CLIENT_IP } from "../../app-values";

const App = (): JSX.Element => {
  const { goFullScreenOnElement, playVideo } = useStore((state) => ({
    goFullScreenOnElement: state.goFullScreenOnElement,
    playVideo: state.playVideo1,
  }));

  useEffect(() => {
    establishConnection();
  });

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            goFullScreenOnElement("video1");
          }}
        >
          FullScreen
        </button>
        <button
          onClick={() => {
            establishConnection();
          }}
        >
          Establish Connection
        </button>
        <button
          onClick={() => {
            clientSocket.emit("ServerHealthCheck");
          }}
        >
          Server Health Ping
        </button>
        <QRCodeSVG value="http://192.168.86.34:5173" />
        <VideoPage />
      </header>
    </div>
  );
};

//todo: update the QR code URL whenever we're finally hosting everything on express

export default App;

//video player.pause is not a function inside visualControlSlice
