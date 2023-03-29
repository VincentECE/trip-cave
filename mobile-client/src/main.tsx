import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightDarkModeThemeSwitch } from "./style/colors";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "./main.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: lightDarkModeThemeSwitch("light") }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trip Caves</title>
      </Helmet>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </ThemeProvider>
  </React.StrictMode>
);
