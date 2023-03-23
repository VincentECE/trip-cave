import styled, { css, keyframes } from "styled-components";

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

const animationTransitionIn = css`
  animation: ${transitionIn} 2s forwards;
`;
const animationTransitionOut = css`
  animation: ${transitionOut} 10s forwards;
`;

const animationTransitionNone = css`
    animation: none;
`

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
  width: 100%;  
  ${({ hide }) => hide && animationTransitionIn }
`;

// animation: ${({ hide }) => hide ? `${transitionOut} 10s forwards` : 'none'};
  // &:fullscreen {
  //   ${(props) => (props.hide ? animationTransitionIn : '')}
  // }