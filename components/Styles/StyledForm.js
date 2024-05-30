import styled from "styled-components";

const StyledForm = styled.form`
  ${(props) =>
    props.$variant === "select" &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 15rem;
  margin: 14px;
  padding: 10px;
  margin-top: 30px;
  border: 1px solid black`}
  ${(props) =>
    props.$variant === "edit" &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 200px;
  margin: 14px;
  padding: 10px;
  margin-top: 30px;
  left: 40px;`}
`;

export default StyledForm;
