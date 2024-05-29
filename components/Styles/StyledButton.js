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
    width: 50px;
    height: 30px;
    padding: 5px;
    top: 50px;
    left: 10px;
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;
  display: flex;
  position: relative;`}

  ${(props) =>
    props.$variant === "cancelEdit" &&
    `
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;
  display: inline-block;`}
`;



export default StyledButton;
