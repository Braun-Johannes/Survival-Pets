import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100vw;
  align-items: center;
  justify-content: center;
  border: solid black;
  border-radius: 10px;
  max-height: 31.8%;
  min-height: 31.8%;
  background: white;
  ${(props) =>
    props.$variant === "tombstone" &&
    `
  border: none;
    `}
`;

export default StyledSection;
