<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> main
import { establishConnection, clientSocket } from "./socket";
import { Video } from "./features";
import { QRCodeSVG } from "qrcode.react";
import { MOBILE_CLIENT_IP } from "../../app-values";
import { useStore } from "./store";

const App = (): JSX.Element => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { goFullScreen } = useStore((state) => ({
    goFullScreen: state.goFullScreen,
  }));

  useEffect(() => {
    establishConnection();

    if (!isFullScreen) {
      goFullScreen();
    }
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            clientSocket.emit("ServerHealthCheck");
          }}
        >
          Server Health Ping
        </button>
<<<<<<< HEAD
      </div>
      <QRCodeSVG value={MOBILE_CLIENT_IP} />
      <VideoPage />
=======
        <QRCodeSVG value={MOBILE_CLIENT_IP} />
        <Video />
      </header>
>>>>>>> main
    </div>
  );
};

//todo: update the QR code URL whenever we're finally hosting everything on express

export default App;

//video player.pause is not a function inside visualControlSlice
