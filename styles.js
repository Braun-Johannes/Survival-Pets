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
    @media (min-width: 800px) {
      display:flex;
      justify-content: center;
   
  }
  }`;
