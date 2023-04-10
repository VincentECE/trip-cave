import { Scene } from "../../api";
import { useStore } from "../../store";
import { Header3 } from "../../components/atom/Typography";
import { Card } from "../../components";
import { Image } from "../../components/atom/Image/Image";

type SceneCardProps = { scene: Scene; onClick: (value: number) => void };

export const SceneCard = ({ scene, onClick }: SceneCardProps): JSX.Element => {
  const { title, imageUrl, sceneId } = scene;
  return (
    <Card onClick={() => onClick(sceneId)}>
      <>
        <Image src={imageUrl} />
        <Header3>{title}</Header3>
      </>
    </Card>
  );
};
