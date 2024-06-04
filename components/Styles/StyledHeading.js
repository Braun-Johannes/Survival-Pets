import styled from "styled-components";

const StyledHeading = styled.h1`
border: solid red 3px;
  ${(props) => props.$variant === "select" && ` text-align: center;`}
  ${(props) => props.$variant === "livingroom" && ` text-align: center;`}
`;

export default StyledHeading;
