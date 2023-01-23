import { useEffect } from "react";
import { establishConnection, mobileClientSocket } from "./socket";
import { Main } from "./pages/Main";

const App = (): JSX.Element => {
  useEffect(() => {
    establishConnection();
  });

  return (
    <div>
      <div>
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
        <Main />
      </div>
    </div>
  );
};

export default App;
