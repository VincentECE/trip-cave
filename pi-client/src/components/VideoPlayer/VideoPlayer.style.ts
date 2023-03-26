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

export const VideoPlayerContainer = styled.div<{ hide: boolean }>`
  animation: ${(props) => (props.hide ? transitionIn : transitionOut)} 10s
    forwards;
  visibility: ${(props) => (!props.hide ? "hidden" : "visible")} forwards;
  video {
    height: auto;
    max-width: 550px;
    width: 100%;
  }
`;
