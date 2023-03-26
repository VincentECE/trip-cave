export type Theme = "dark" | "light"

export type ColorTheme = "dark" | "light" | "appBg"

export const lightModeColorTheme = {
  black: '#080D0E',
  white: '#E2DED3',
  appBg: '#0D1D26',
  slateGray: "#2D353A",
  mossGreen: "#7E837A",
  taupeBrown: "#D4D1C0",
};


export const darkModeColorTheme = {
  black: '#080D0E',
  white: '#E2DED3',
  appBg: "#0D1D26",
  slateGray: "#2D353A",
  mossGreen: "#7E837A",
  taupeBrown: "#D4D1C0",
};


export const lightDarkModeThemeSwitch = (mode: Theme) => {
  return mode === 'dark' ? darkModeColorTheme : lightModeColorTheme; 
}