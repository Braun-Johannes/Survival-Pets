import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
  width: 100vw;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }`;
