import styled from "styled-components";

const StyledInput = styled.input`
  ${(props) =>
    props.$variant === "name" &&
    `
    text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 18px;
    `}
`;

export default StyledInput;
