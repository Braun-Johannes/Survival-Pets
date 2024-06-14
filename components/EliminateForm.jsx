import StyledSection from "@/components/Styles/StyledSection";
import PositionedButton from "@/components/Styles/StyledButton";
import styled from "styled-components";

export default function EliminateForm({ onEliminate, onMode }) {
  return (
      <StyledSection>
        <StyledParagraph>
          Are you sure you want to eliminate your pet?
        </StyledParagraph>
        <EliminateButtons>
          <PositionedButton
            position="relative"
            $variant="confirm"
            type="button"
            onClick={() => onEliminate()}
          >
            Confirm
          </PositionedButton>
          <PositionedButton
            position="relative"
            $variant="cancel"
            type="button"
            onClick={() => onMode("livingroom")}
          >
            Cancel
          </PositionedButton>
          </EliminateButtons>
      </StyledSection>
  );
}

const StyledParagraph = styled.p`
  font-size: 30px;
  text-align: center;
`;

const EliminateButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`
