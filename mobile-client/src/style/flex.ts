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

export const BaseFlexRightColumn = css`
${FlexColumn}
${FlexCenterYStyle}
justify-content: flex-end;
`

export const BaseFlexLeftColumn = css`
${FlexColumn}
${FlexCenterYStyle}
justify-content: flex-start;
`

export const BaseFlexSpaceBetweenCenterColumns = css`
  ${FlexCenterYStyle};
  ${FlexColumn}
  justify-content: space-between;
`

export const BaseFlexSpaceAroundCenterColumns = css`
  ${FlexCenterYStyle};
  ${FlexColumn}
  justify-content: space-around;
`

export const BaseFlexSpaceEvenlyCenterColumns = css`
  ${FlexCenterYStyle};
  ${FlexColumn}
  justify-content: space-around;
`

export const BaseFlexSpaceBetweenCenterRow = css`
  ${FlexCenterYStyle};
  ${FlexRow}
  justify-content: space-between;
`

export const BaseFlexSpaceAroundCenterRow= css`
  ${FlexCenterYStyle};
  ${FlexRow}
  justify-content: space-around;
`

export const BaseFlexSpaceEvenlyCenterRow= css`
  ${FlexCenterYStyle};
  ${FlexRow}
  justify-content: space-around;
`

export const flex = {
  default: (direction: 'row' | 'column') => direction == "row" ? BaseFlexCenterRow : BaseFlexCenterColumn,
  sideCol: (side: 'left' | 'right') => side == 'right' ? BaseFlexRightColumn : BaseFlexLeftColumn,
  centeredSpacedCol: (spaced: 'around' | 'between' | 'evenly') => {
    switch(spaced) {
      case 'around':
        return BaseFlexSpaceAroundCenterColumns
      case 'evenly':
        return BaseFlexSpaceEvenlyCenterColumns
      case 'between': 
        return BaseFlexSpaceBetweenCenterColumns
    }
  },
    centeredSpacedRow: (spaced: 'around' | 'between' | 'evenly') => {
    switch(spaced) {
      case 'around':
        return BaseFlexSpaceAroundCenterRow
      case 'evenly':
        return BaseFlexSpaceEvenlyCenterRow
      case 'between': 
        return BaseFlexSpaceBetweenCenterRow
    }
  }
}