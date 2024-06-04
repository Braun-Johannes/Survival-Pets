import PositionedButton from "./Styles/StyledButton";
import styled from "styled-components";

export default function InteractionMenu() {
  return (
    <StyledDiv>
      <PositionedButton position="static">Feed</PositionedButton>
      <PositionedButton position="static">Sleep</PositionedButton>
      <PositionedButton position="static">Play</PositionedButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
