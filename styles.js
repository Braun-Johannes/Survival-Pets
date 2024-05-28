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

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 50vh;
`;

export const StyledListItem = styled.li`
  border: 2px black solid;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledHeading = styled.h1`
  text-align: center;
`;

export const ListButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-block;
`;
