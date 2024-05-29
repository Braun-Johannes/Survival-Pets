import styled from "styled-components";

const StyledStatsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: black solid 2px;
  border-radius: 5px;
  height: 37vh;
  margin: 1rem;
  list-style: none;
  @media (min-width: 800px) {
    width: 350px;
    height: 300px;
  }
`;

export default StyledStatsContainer;
