import { Container } from "./Card.style";

type CardProps = { children: React.ReactElement; onClick?: () => void };

export const Card = ({ children, onClick }: CardProps): JSX.Element => {
  return <Container onClick={onClick}>{children}</Container>;
};
