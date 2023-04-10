import { SceneCard } from "./SceneCard";
import { useEffect } from "react";
import { useStore } from "../../store";
import { v4 as uuid } from "uuid";

export const SceneList = (): JSX.Element => {
  const { getAllScenes, scenes, playScene } = useStore((state) => ({
    getAllScenes: state.getAllScenes,
    scenes: state.scenes,
    playScene: state.playSelectedScene,
  }));

  useEffect(() => {
    getAllScenes();
  }, [getAllScenes]);
  return (
    <div>
      {scenes.map((scene) => (
        <SceneCard key={uuid()} scene={scene} onClick={playScene} />
      ))}
    </div>
  );
};
