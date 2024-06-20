import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;

  ${(props) =>
    props.$variant === "select" &&
    `
    flex-wrap: wrap;
  justify-content: center;
  `}

  ${(props) =>
    props.$variant === "graveyard" &&
    `
    overflow: hidden;
    justify-content: center;
    flex-wrap: wrap;
  margin-bottom: 350px;
  `}
`;

export default StyledList;
