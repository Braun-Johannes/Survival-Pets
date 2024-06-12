import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Poetsen+One&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Concert One", cursive;
  }
  
  input, button {
    font-family: "Concert One", cursive;
  }
  h1, h2 {
    font-family: "Poetsen One", cursive;
  }`;
