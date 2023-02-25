import styled from "styled-components";
import { flex } from "../../style/flex";

export const ControlContainer = styled.div`
  ${flex.default('row')};
  background-color: ${(props) => props.theme.color.white};
  opacity: 90%;
  max-height: 75px;
  min-height: 50px;

`

export const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  ${flex.default('column')}

  svg {
    height: 36px;
    width: 36px;  
  }
`
