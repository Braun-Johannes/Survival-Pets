import styled from "styled-components";

const StyledForm = styled.form`
  border-radius: 5px;
  height: 20rem;
  padding: 10px;
  margin: 30px 15px 5px 15px;

  ${(props) =>
    props.$variant === "select" &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid black;
  
  
  `}
  ${(props) =>
    props.$variant === "edit" &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  `};
`;

export default StyledForm;
