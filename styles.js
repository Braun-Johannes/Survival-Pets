import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

//_____________________General_____________________

export const StyledHeading = styled.h1`
  text-align: center;
`;
