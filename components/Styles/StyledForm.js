import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 30%;
  margin: 10px;

  ${(props) =>
    props.$variant === "select" &&
    `  
  border: solid black;
    border-radius: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  
  
  `}
  ${(props) =>
    props.$variant === "eliminate" &&
    `  
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  
  `}
`;

export default StyledForm;
