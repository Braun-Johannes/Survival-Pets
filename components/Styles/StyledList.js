import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;

  ${(props) =>
    props.$variant === "graveyard" &&
    `
  flex-wrap: wrap;
  `}
`;

export default StyledList;
