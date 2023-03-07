import styled, { keyframes } from "styled-components";

const transitionIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const transitionOut = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`;



export const VideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Video = styled.video<{ hide: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:fullscreen {
    animation: ${(props) => (props.hide ? transitionIn : transitionOut)} 10s forwards;
    visibility: ${(props) => (!props.hide ? "hidden" : "visible")} forwards;
  }
`;
