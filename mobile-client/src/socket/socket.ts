import { io, Socket } from "socket.io-client";
import { MOBILE_CLIENT_IP } from "../../../app-values";
import { SceneStatus } from "../api";
import { useStore } from "../store";

const serverUrl = MOBILE_CLIENT_IP;
const { setSceneStatus } = useStore.getState();

export let mobileClientSocket: Socket;

export const establishConnection = () => {
  mobileClientSocket = io(serverUrl);

  mobileClientSocket.on("connect_error", () => {
    console.log("couldn't connect to server");
  });

  mobileClientSocket.on("connect", () => {
    console.log("connected to server");
  });

  mobileClientSocket.on("disconnect", () => {
    console.log("disconnected from server");
  });

  mobileClientSocket.on("serverStatus", (data) => {
    const { status } = data;
    console.log(status);
  });

  mobileClientSocket.on("updateSceneStatus", (data) => {
    //name is up for debate
    const sceneStatus: SceneStatus = data;

    setSceneStatus(sceneStatus);

    console.log("sceneStatus: ", sceneStatus);
  });
};
