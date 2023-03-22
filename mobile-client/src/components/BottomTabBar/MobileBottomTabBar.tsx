import {
  BottomTabContainer,
  Container,
  IconContainer,
} from "./MobileBottomTabBar.style";
import { HiQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useStore } from "../../store";

export type MobileBottomTabBarProps = {
  children: JSX.Element;
};

export const MobileBottomTabBar = ({ children }: MobileBottomTabBarProps) => {
  const { goFullScreen, getServerStatus } = useStore(
    ({ goFullScreen, getServerStatus }) => ({
      goFullScreen,
      getServerStatus,
    })
  );

  return (
    <Container>
      {children}
      <BottomTabContainer>
        <IconContainer>
          <VscVmConnect onClick={getServerStatus} />
        </IconContainer>
        <IconContainer>
          <HiQueueList />
        </IconContainer>
        <IconContainer>
          <AiOutlineFullscreen onClick={goFullScreen} />
        </IconContainer>
      </BottomTabContainer>
    </Container>
  );
};
