import { Container } from "./MobileBottomTabBar.style";

export type MobileBottomTabBarProps = {
  children: JSX.Element;
};

export const MobileBottomTabBar = ({ children }: MobileBottomTabBarProps) => (
  <Container>{children}</Container>
);
