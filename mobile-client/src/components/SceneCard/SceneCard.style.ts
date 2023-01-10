import styled, { css } from "styled-components";

const FlexColSpacing3 = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Container = styled.div<{ color?: "red" | "blue" }>`
  ${FlexColSpacing3}
  background-color: ${(props) => props.color ?? undefined};
`;

export const Img = styled.img`
  height: 300px;
`;

export const AnotherContainer = styled.div`
  ${FlexColSpacing3}
  background-color: green;
`;
