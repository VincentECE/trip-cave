import {
  BottomTabContainer,
  Container,
  IconContainer,
} from "./MobileBottomTabBar.style";
import { toast } from "react-toastify";
import { HiQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";
export type MobileBottomTabBarProps = {
  children: JSX.Element;
};

export const MobileBottomTabBar = ({ children }: MobileBottomTabBarProps) => {
  const checkPiServer = () => {
    toast.success("Pinging server! Looks healthy!");
  };
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
      </BottomTabContainer>
    </Container>
  );
};
