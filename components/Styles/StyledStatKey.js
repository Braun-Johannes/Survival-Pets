import styled from "styled-components";

const StyledStatKey = styled.span`
  ${(props) => props.$variant === "icon" && `border-top: solid 1px black;`}
`;

export default StyledStatKey;
