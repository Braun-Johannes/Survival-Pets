import styled from "styled-components";

const StyledButton = styled.button`
  ${(props) =>
    props.$variant === "select" &&
    `
    all: unset;
  cursor: pointer;
  display: inline-block;`}

  ${(props) =>
    props.$variant === "updateEdit" &&
    `
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;
  display: inline-block;`}

  ${(props) =>
    props.$variant === "edit" &&
    `
    display: flex;
    position: relative;
    width: 50px;
    height: 30px;
    padding: 5px;
    top: 50px;
    left: 10px;
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;`}

  ${(props) =>
    props.$variant === "cancelEdit" &&
    `
    display: flex;
    position: relative;
    width: 80px;
    height: 30px;
    top: 40px;
    right: 10px;
    border-radius: 7px;
    font-size: 20px;
  cursor: pointer;`}
`;



export default StyledButton;
