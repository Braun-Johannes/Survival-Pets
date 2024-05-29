import styled from "styled-components";

const StyledButton = styled.button`
  ${(props) =>
    props.$variant === "select" &&
    `
    all: unset;
  cursor: pointer;
  display: inline-block;`}

  ${(props) =>
    props.$variant === "edit" &&
    `
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;
  display: inline-block;`}

  ${(props) =>
    props.$variant === "cancelEdit" &&
    `
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;
  display: inline-block;`}
`;



export default StyledButton;
