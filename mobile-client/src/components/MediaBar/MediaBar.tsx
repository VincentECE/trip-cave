import { ControlContainer, IconContainer } from "./MediaBar.style";
import {
  AiOutlineForward,
  AiOutlineBackward,
  AiOutlinePause,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { mobileClientSocket } from "../../socket";
import { useStore } from "../../store";

export type ControlBarProps = {
  onClick?: (isPlaying: boolean) => void;
};

export const MediaBar = (props: ControlBarProps): JSX.Element => {
  //todo: playNow name should probably change to playScene
  const { sceneStatus, playScene, pauseScene } = useStore((state) => ({
    sceneStatus: state.sceneStatus,
    playScene: state.playScene,
    pauseScene: state.pauseScene,
  }));

  const handleSwitch = () => {
    if (sceneStatus?.isPlaying === true) {
      pauseScene();
    } else {
      playScene();
    }
  };

  return (
    <ControlContainer>
      <IconContainer>
        <AiOutlineBackward />
      </IconContainer>
      {sceneStatus?.isPlaying ? (
        <IconContainer
          onClick={() => {
            handleSwitch();
          }}
        >
          <AiOutlinePause />
        </IconContainer>
      ) : (
        <IconContainer
          onClick={() => {
            handleSwitch();
          }}
        >
          <AiOutlineCaretRight />
        </IconContainer>
      )}
      <IconContainer onClick={() => mobileClientSocket.emit("playNextVideo")}>
        <AiOutlineForward />
      </IconContainer>
    </ControlContainer>
  );
};
