import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  ${(props) =>
    props.$variant === "interaction" &&
    `

    // all: unset;
    display: grid;
    grid-template-rows: 80%, 20%;
  `}
`;

export default StyledSection;
