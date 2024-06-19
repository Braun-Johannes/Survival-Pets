import styled from "styled-components";

const StyledListItem = styled.li`
  ${(props) =>
    props.$variant === "select" &&
    `
    border: solid black 2px;
    min-width: 80px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    

  `}
  ${(props) =>
    props.$variant === "livingroom" &&
    `
    text-align: center;
  padding: 8px;
  width: 50%;
  margin: 1%;
  box-sizing: border-box;
  height: 23%;
  `}
  ${(props) =>
    props.$selected === true &&
    `

    border: 3px orange solid;
    `}
    ${(props) =>
    props.$variant === "graveyard" &&
    `
      border-radius: 5px;
      min-width: 90px;
      text-align: center;
  
    `}
`;

export default StyledListItem;
