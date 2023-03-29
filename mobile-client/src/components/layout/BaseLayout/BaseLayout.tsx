import { BaseLayoutContainer } from "./BaseLayout.style";

export type BaseLayoutProps = {
  children: JSX.Element;
};

export const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <BaseLayoutContainer>{children}</BaseLayoutContainer>
);
