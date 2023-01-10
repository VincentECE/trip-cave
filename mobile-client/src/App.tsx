import { useState, useEffect } from "react";
import { establishConnection, mobileClientSocket } from "./socket";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HomePage } from "./features";

const App = (): JSX.Element => {
  useEffect(() => {
    establishConnection();
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Mobile Server</h1>
      <div className="card">
        <button
          onClick={() => {
            mobileClientSocket.emit("goFullScreen");
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
            mobileClientSocket.emit("ServerHealthCheck");
          }}
        >
          Server Health Ping
        </button>
        <button
          onClick={() => {
            mobileClientSocket.emit("playVideo");
          }}
        >
          Play Video
        </button>
        <button
          onClick={() => {
            mobileClientSocket.emit("pauseVideo");
          }}
        >
          Pause Video
        </button>
        <button
          onClick={() => {
            mobileClientSocket.emit("playNextVideo");
          }}
        >
          Play Next Video
        </button>
        <HomePage />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
