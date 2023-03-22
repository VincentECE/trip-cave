import styled from "styled-components";
import { flex } from "../../style/flex";

export const Container = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: auto;
  bottom: 0;
`;

export const BottomTabContainer = styled.div`
  ${flex.centeredSpacedRow("evenly")};
  background-color: ${(props) => props.theme.color.slateGray};
  max-height: 100px;
  min-height: 50px;
`;

export const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  ${flex.default("column")}
  svg {
    height: 32px;
    width: 32px;
    fill: ${(props) => props.theme.color.white};
  }
`;
