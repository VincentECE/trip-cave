import { Scene } from "../../../../api";
import { useStore } from "../../../../store";
import { Header3 } from "../../../../components/atom/Typography";
import { Img } from "./SceneCard.style";
import { Card } from "../../../../components/atom/Card/Card";

type SceneCardProps = { scene: Scene };

export const SceneCard = (props: SceneCardProps): JSX.Element => {
  const playSelectedScene = useStore((state) => state.playSelectedScene);
  const { title, imageUrl, sceneId } = props.scene;
  return (
    <Card
      onClick={() => {
        playSelectedScene(sceneId);
      }}
    >
      <div>
        <Img src={imageUrl} />
        <Header3>{title}</Header3>
      </div>
    </Card>
  );
};
