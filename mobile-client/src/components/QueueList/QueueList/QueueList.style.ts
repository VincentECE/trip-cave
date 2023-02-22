import styled from "styled-components"
import { flex } from "../../../style/flex"

export const Container = styled.div`
  ${flex.default('row')};
  background-color: ${(props) => props.theme.color.white};
  max-height: 100px;
  min-height: 50px;

`
