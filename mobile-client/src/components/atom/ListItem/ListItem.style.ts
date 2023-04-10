import styled from "styled-components";
import { FlexBaseStyle, FlexRow, } from "../../../style/flex";

export const Container = styled.div`
  ${FlexBaseStyle}
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
`

export const TrailingContent = styled.div`
  ${FlexBaseStyle}
  justify-self: end;
  width: 100%;
`

export const HeadingContent = styled.div`
  ${FlexBaseStyle}
  justify-self: start;
  width: 100%;
`

export const BodyContainer = styled.div`
  ${FlexRow}
  gap: 5px;
  width: 100%;
`