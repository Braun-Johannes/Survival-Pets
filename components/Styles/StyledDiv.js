import styled from "styled-components";

const StyledDiv = styled.div`
  ${(props) =>
    props.$variant === "edit" &&
    `
    display: grid;
  grid-template-columns: 75% 25%;
  border: solid black;
  border-radius: 5px;
  margin: 10px;
    `}
  ${(props) =>
    props.$variant === "livingroom" &&
    `display: grid;
grid-template-columns: 75% 25% ;
border: solid black;
border-radius: 5px;
margin: 10px;`}
`;

export default StyledDiv;
