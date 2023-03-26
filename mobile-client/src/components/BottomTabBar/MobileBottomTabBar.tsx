import {
  BottomTabContainer,
  Container,
  IconContainer,
} from "./MobileBottomTabBar.style";
import { toast } from "react-toastify";
import { HiQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useStore } from "../../store";
import { throwServerError } from "../../api";

export type MobileBottomTabBarProps = {
  children: JSX.Element;
};

export const MobileBottomTabBar = ({ children }: MobileBottomTabBarProps) => {
  const checkPiServer = () => {
    toast.success("Server looks healthy!");
  };
  const goFullScreen = useStore((state) => state.goFullScreen);

  return (
    <Container>
      {children}
      <BottomTabContainer>
        <IconContainer>
          <VscVmConnect />
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
