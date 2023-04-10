import { css } from "styled-components";

const multiplyBy4 = (value: number) => value * 4;

export const padding = {
  x: (value: number) => css`
    padding-right: ${multiplyBy4(value)}px;
    padding-left: ${multiplyBy4(value)}px;
  `,
  y: (value: number) => css`
    padding-top: ${multiplyBy4(value)}px;
    padding-bottom: ${multiplyBy4(value)}px;
  `,
  all: (value: number) => css`
    padding: ${multiplyBy4(value)}px;
  `
};