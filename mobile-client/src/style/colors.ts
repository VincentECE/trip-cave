export type Theme = "dark" | "light"

export type ColorTheme = "dark" | "light" | "appBg"

export const lightModeColorTheme = {
  black: 'black',
  white: 'white',
  appBg: 'white',
};


export const darkModeColorTheme = {
  black: 'black',
  white: 'white',
  appBg: 'black',
};


export const lightDarkModeThemeSwitch = (mode: Theme) => {
  return mode === 'dark' ? darkModeColorTheme : lightModeColorTheme; 
}