import styled from "styled-components";

const StyledStatsContainer = styled.ul`
  display: grid;
  grid-template-columns: auto 15%;
  list-style: none;
  position: fixed;
  bottom: -15px;
  width: 100vw;
  border: solid black;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

export default StyledStatsContainer;
