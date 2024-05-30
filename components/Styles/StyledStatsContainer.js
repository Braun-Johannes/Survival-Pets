import styled from "styled-components";

const StyledStatsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding-inline-start: 0;
  list-style: none;
  width: 100%;
  margin: 50px 30px 50px 30px;
`;

export default StyledStatsContainer;
