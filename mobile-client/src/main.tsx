import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightDarkModeThemeSwitch } from "./style/colors";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: lightDarkModeThemeSwitch("light") }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
