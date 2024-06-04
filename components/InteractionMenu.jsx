import PositionedButton from "./Styles/StyledButton";
import styled from "styled-components";

export default function InteractionMenu({ onIncreaseStats }) {
  return (
    <InteractionContainer>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("satiety", 5)}
        position="static"
      >
        Feed
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("energy", 5)}
        position="static"
      >
        Sleep
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("happiness", 5)}
        position="static"
      >
        Play
      </PositionedButton>
    </InteractionContainer>
  );
}

const InteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
