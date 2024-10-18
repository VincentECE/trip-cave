import { useStore } from "../../store";

export const CurrentMediaInfo = (): JSX.Element => {
  const currentScene = useStore((state) => state.sceneStatus?.scene);

  return (
    <div>
      <div
        className="current-media-image-container"
        style={{ maxWidth: "4px" }}
      >
        <img src={currentScene?.imageUrl} alt={""} />
      </div>
      <div className="current-media-title-container">
        <p>{currentScene?.title}</p>
      </div>
    </div>
  );
};
