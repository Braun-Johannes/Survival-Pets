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
    align-items: center;
    margin: 0;
    height: 50vh;
  }
  
  .petListItem {
    border: 2px black solid;
    border-radius: 5px;
    padding: 5px;
  }



`;
