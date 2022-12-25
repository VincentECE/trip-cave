import logo from "./assets/react.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { VideoPlayer1, VideoPlayer2 } from "./components";
import { useStore } from "./store";
import { establishConnection, clientSocket } from "./socket";

const App = (): JSX.Element => {
  const { goFullScreenOnElement, playVideo } = useStore((state) => ({
    goFullScreenOnElement: state.goFullScreenOnElement,
    playVideo: state.playVideo,
  }));

  useEffect(() => {
    establishConnection();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="poop" className="logo" alt="Vite logo" />
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
        <VideoPlayer1 />
      </header>
    </div>
  );
};

export default App;

//video player.pause is not a function inside visualControlSlice
