import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "@/components/SVGIcon";
import styled from "styled-components";

export default function InteractionMenu({ onIncreaseStats }) {
  return (
    <InteractionContainer>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("satiety", 5)}
        $position="static"
        color="#fce671"
      >
        <SVGIcon variant="food" ariaLabel="Feed" />
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("energy", 5)}
        $position="static"
        color="#ffb628"
      >
        <SVGIcon variant="sleep" ariaLabel="Sleep" />
      </PositionedButton>
      <PositionedButton
        $variant="interaction"
        type="button"
        onClick={() => onIncreaseStats("happiness", 5)}
        $position="static"
        color="#ff8660"
      >
        <SVGIcon variant="ball" ariaLabel="Play" />
      </PositionedButton>
    </InteractionContainer>
  );
}

const InteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    margin-left: -10px;
  }
`;
