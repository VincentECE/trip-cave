import { Container } from "./MobileBottomTabBar.style";

export type MobileBottomTabBarProps = {
  tabList: any[];
};

export const MobileBottomTabBar = ({ tabList }: MobileBottomTabBarProps) => (
  <Container>
    {tabList.map((tab) => (
      <></>
    ))}
  </Container>
);
