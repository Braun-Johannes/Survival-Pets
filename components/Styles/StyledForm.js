import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  height: 20rem;
  margin: 10px;

  ${(props) =>
    props.$variant === "select" &&
    `  
  border: solid black;
  
  
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
