import styled from "styled-components";

const StyledForm = styled.form`
  ${(props) =>
    props.$variant === "select" &&
    `  display: flex;
    position: relative;
    left: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 33vh;
  margin: 14px;
  padding: 10px;
  margin-top: 30px;`}
`;

export default StyledForm;
