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
  max-width: 800px
  justify-content: center;
  justify-self: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 350px;
  
  `}
`;

export default StyledList;
