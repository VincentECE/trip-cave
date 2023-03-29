import { SceneCard } from "../SceneCard";
import { useEffect } from "react";
import { useStore } from "../../../../store";
import { v4 as uuid } from "uuid";

export const SceneList = (): JSX.Element => {
  const { getAllScenes, scenes } = useStore((state) => ({
    getAllScenes: state.getAllScenes,
    scenes: state.scenes,
  }));

  useEffect(() => {
    getAllScenes();
  }, [getAllScenes]);
  return (
    <>
      {scenes.map((scene) => (
        <SceneCard key={uuid()} scene={scene} />
      ))}
    </>
  );
};
