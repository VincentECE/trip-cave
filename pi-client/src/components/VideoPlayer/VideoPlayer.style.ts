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
  animation: ${(props) => (props.hide ? transitionIn : transitionOut)} 5s;
  visibility: ${(props) => (!props.hide ? "hidden" : "visible")};
  position: absolute;
`;
