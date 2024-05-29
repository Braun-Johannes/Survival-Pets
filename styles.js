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
  }`;

export const StyledStatKey = styled.span`
  font-weight: bold;
  border-bottom: solid 1px black;
  padding: 2px;
`;

//_____________________General_____________________

export const StyledHeading = styled.h1`
  text-align: center;
`;
