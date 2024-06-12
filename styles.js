import { createGlobalStyle } from "styled-components";
import { Concert_One } from "next/font/google";

const concertOne = Concert_One({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${concertOne.style.fontFamily};
  }
  
  input, button {
    font-family: ${concertOne.style.fontFamily};
  }
  h1, h2 {
    font-family: ${concertOne.style.fontFamily};
  }`;
