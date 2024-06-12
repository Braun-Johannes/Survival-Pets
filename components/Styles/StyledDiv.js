import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
bottom: 0;
width: calc(100vw - 1rem);
  align-items: center;
  justify-content: center;
  border: solid black;
  border-radius: 5px;
  margin: 10px;
  height: 20rem;
  ${(props) =>
    props.$variant === "tombstone" &&
    `
  border: none;
    `}
    
`;

export default StyledDiv;
