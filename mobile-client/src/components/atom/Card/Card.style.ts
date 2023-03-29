import styled, { css } from "styled-components";

const FlexCol = css`
  display: flex;
  flex-direction: column;
  align-content: center;  
  flex-wrap: wrap;
`;

export const Container = styled.div`
  ${FlexCol}
`;
