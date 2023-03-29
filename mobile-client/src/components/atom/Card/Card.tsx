import { Container } from "./Card.style";

export type CardProps = {
  children: JSX.Element;
  onClick: () => void;
};

export const Card = ({ children, onClick }: CardProps) => (
  <Container onClick={onClick}>{children}</Container>
);
