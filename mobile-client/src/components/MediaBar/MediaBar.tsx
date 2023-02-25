import { useState } from "react";
import { ControlContainer, IconContainer } from "./MediaBar.style";
import {
  AiOutlineForward,
  AiOutlineBackward,
  AiOutlinePause,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { mobileClientSocket } from "../../socket";

export type ControlBarProps = {
  onClick?: (isPlaying: boolean) => void;
};

export const MediaBar = (props: ControlBarProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleSwitch = () => {
    props.onClick && props.onClick(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  return (
    <ControlContainer>
      <IconContainer>
        <AiOutlineBackward />
      </IconContainer>
      {isPlaying ? (
        <IconContainer
          onClick={() => {
            handleSwitch();
            mobileClientSocket.emit("pauseVideo");
          }}
        >
          <AiOutlinePause />
        </IconContainer>
      ) : (
        <IconContainer
          onClick={() => {
            handleSwitch();
            mobileClientSocket.emit("playVideo");
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
