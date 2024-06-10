import PositionedButton from "./Styles/StyledButton";
import SVGIcon from "./SVGIcon";
import styled from "styled-components";

export default function InteractionMenu({ onIncreaseStats }) {
  return (
    <InteractionContainer>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("satiety", 5)}
        position="static"
        color="lightgreen"
      >
        <SVGIcon variant="food" ariaLabel="feed" />
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("energy", 5)}
        position="static"
        color="lightblue"
      >
        <SVGIcon variant="sleep" ariaLabel="sleep" />
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("happiness", 5)}
        position="static"
        color="orange"
      >
        <SVGIcon variant="ball" ariaLabel="play" />
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
