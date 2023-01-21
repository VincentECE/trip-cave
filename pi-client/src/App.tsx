import logo from "./assets/react.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { VideoPlayer1, VideoPlayer2 } from "./components";
import { useStore } from "./store";
import { establishConnection, clientSocket } from "./socket";
import { VideoPage } from "./features";
import { QRCodeSVG } from "qrcode.react";

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
        <img src={logo} id="poop" className="logo" alt="Vite logo" />
        <QRCodeSVG value="http://192.168.86.34:5173" />
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
        <VideoPage />
      </header>
    </div>
  );
};

export default App;

//video player.pause is not a function inside visualControlSlice
