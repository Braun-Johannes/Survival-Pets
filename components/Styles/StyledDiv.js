import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  position: relative;
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
