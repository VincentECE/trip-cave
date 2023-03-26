import {
  BottomTabContainer,
  Container,
  IconContainer,
} from "./MobileBottomTabBar.style";
import { toast } from "react-toastify";
import { HiQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";

import { BiFullscreen } from "react-icons/bi";
import { mobileClientSocket } from "../../socket";
import { SOCKET_EMIT } from "../../socket/constant";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useStore } from "../../store";
import { throwServerError } from "../../api";

export type MobileBottomTabBarProps = {
  children: JSX.Element;
};

export const MobileBottomTabBar = ({ children }: MobileBottomTabBarProps) => {
  const checkPiServer = () => {
    toast.success("Pinging server! Looks healthy!");
    mobileClientSocket.emit(SOCKET_EMIT.CHECK_SERVER);
  };
  const goFullScreen = useStore((state) => state.goFullScreen);

  return (
    <Container>
      {children}
      <BottomTabContainer>
        <IconContainer onClick={checkPiServer}>
          <VscVmConnect />
        </IconContainer>
        <IconContainer
          onClick={() => mobileClientSocket.emit(SOCKET_EMIT.FULL_SCREEN)}
        >
          <BiFullscreen />
        </IconContainer>
        <IconContainer>
          <HiQueueList />
        </IconContainer>
        <IconContainer>
          <AiOutlineFullscreen onClick={goFullScreen} />
        </IconContainer>
        <button
          onClick={() => {
            throwServerError();
          }}
        >
          Throw error on server
        </button>
      </BottomTabContainer>
    </Container>
  );
};
