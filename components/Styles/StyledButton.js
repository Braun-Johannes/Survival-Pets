import styled from "styled-components";

const StyledButton = styled.button`
  ${(props) =>
    props.$variant === "select" &&
    `  all: unset;
  cursor: pointer;
  display: inline-block;`}
`;

export default StyledButton;
