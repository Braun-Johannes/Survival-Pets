import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
    text-align: center;
  }

  .petList {
    display: flex;
    justify-content: space-around;

    list-style: none;
    padding: 0;
    margin: 0;

  }

`;
