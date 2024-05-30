import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 20px;

  ${(props) =>
    props.$variant === "highlight" &&
    `
    background: none;
    border: none;
  `}

  ${(props) =>
    props.$variant === "edit" &&
    `
    position: absolute;
    top: 10px;
    right: 10px;
    `}
  

  ${(props) =>
    props.$variant === "cancelEdit" &&
    `
    position: absolute;
    right: 10px;
    top: 10px;
    
    `}
`;

export default StyledButton;
