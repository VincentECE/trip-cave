import styled from "styled-components";
import { padding } from "../../../style/spacing";

export const Container = styled.div<{ height?: number }>`
  width: 100%;
  max-height: ${({ height }) => height && height}px;
  overflow-y:  ${({ height }) => height ? 'scroll' : 'auto'};
  ${padding.all(4)}
`