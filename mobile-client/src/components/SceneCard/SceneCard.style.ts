import styled from "styled-components";

export const Container = styled.div<{ color: "red" | "blue" }>`
  display: flex;
  backgroung-color: ${(props) => props.color};
`;
