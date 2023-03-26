import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
=======
import { ThemeProvider } from "styled-components";
import { lightDarkModeThemeSwitch } from "./style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ colors: lightDarkModeThemeSwitch("dark") }}>
      <App />
    </ThemeProvider>
>>>>>>> main
  </React.StrictMode>
);
