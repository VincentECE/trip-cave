import logo from "./assets/react.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { VideoPlayer } from "./components";
import { useStore } from "./store";
import { VisualControlType } from "./store/createVisualControlSlice";
import { establishConnection } from "./socket";

const App = (): JSX.Element => {
  const { goFullScreenOnElement, playVideo } = useStore((state) => ({
    goFullScreenOnElement: state.goFullScreenOnElement,
    playVideo: state.playVideo,
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="poop" className="logo" alt="Vite logo" />
        <button
          onClick={() => {
            goFullScreenOnElement("video");
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
        <VideoPlayer />
      </header>
    </div>
  );
};

export default App;

//video player.pause is not a function inside visualControlSlice
