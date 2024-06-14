import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: calc(100vw - 1rem);
  align-items: center;
  justify-content: center;
  border: solid black;
  border-radius: 10px;
  margin: 10px;
  min-height: 30%;
  ${(props) =>
    props.$variant === "tombstone" &&
    `
  border: none;
    `}

`;

export default StyledSection;
