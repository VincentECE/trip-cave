import { useState } from "react";
import { ControlContainer, IconContainer } from "./MediaBar.style";
import {
  AiOutlineForward,
  AiOutlineBackward,
  AiOutlinePause,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { mobileClientSocket } from "../../../socket";
import { SOCKET_EMIT } from "../../../socket/constant";

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
            mobileClientSocket.emit(SOCKET_EMIT.PAUSE);
          }}
        >
          <AiOutlinePause />
        </IconContainer>
      ) : (
        <IconContainer
          onClick={() => {
            handleSwitch();
            mobileClientSocket.emit(SOCKET_EMIT.PLAY);
          }}
        >
          <AiOutlineCaretRight />
        </IconContainer>
      )}
      <IconContainer
        onClick={() => mobileClientSocket.emit(SOCKET_EMIT.PLAY_NEXT_VIDEO)}
      >
        <AiOutlineForward />
      </IconContainer>
    </ControlContainer>
  );
};
