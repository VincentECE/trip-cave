import { css } from "styled-components";

export const FlexBaseStyle = css`
  display: flex;
`

export const FlexCenterYStyle = css`
  align-items: center;
` 

export const FlexCenterXStyle = css`
  justify-content: center;
` 

export const FlexCenterXYStyle = css`
  ${FlexCenterXStyle}
  ${FlexCenterYStyle}
` 

export const FlexRow = css`
  ${FlexBaseStyle}
  flex-direction: row;
`

export const FlexColumn = css`
  ${FlexBaseStyle}
  flex-direction: column;
`

export const BaseFlexCenterRow = css`
  ${FlexRow}
  ${FlexCenterXYStyle}

`

export const BaseFlexCenterColumn = css`
  ${FlexColumn}
  ${FlexCenterXYStyle}
`

export const flex = {
  default: (direction: 'row' | 'column') => direction == "row" ? BaseFlexCenterRow : BaseFlexCenterColumn,
}