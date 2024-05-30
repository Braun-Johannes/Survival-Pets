import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: solid black;
  border-radius: 5px;
  margin: 10px;
  height: 20rem;
`;

// const PositionedDiv = styled(StyledDiv)`
//   position: ${(props) => props.position || "absolute"};
//   top: ${(props) => props.top || "auto"};
//   right: ${(props) => props.right || "auto"};
//   bottom: ${(props) => props.bottom || "auto"};
//   left: ${(props) => props.left || "auto"};
//   width: ${(props) => props.width || "auto"};
// `;

export default StyledDiv;
