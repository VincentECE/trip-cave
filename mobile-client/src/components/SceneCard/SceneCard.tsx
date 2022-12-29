import { Container } from "./SceneCard.style";

type SceneCardProps = {};

export const SceneCard = (props: SceneCardProps): JSX.Element => {
  return (
    <Container color="red">
      <h1>hello world</h1>
    </Container>
  );
};
