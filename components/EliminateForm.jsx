import StyledForm from "@/components/Styles/StyledForm";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import PositionedDiv from "@/components/Styles/PositionedDiv";
import styled from "styled-components";

export default function EliminateForm({ onEliminate, onMode }) {
  return (
    <PositionedDiv>
      <StyledDiv>
        <StyledParagraph>
          Are you sure you want to eliminate your pet?
        </StyledParagraph>
        <StyledForm $variant="eliminate">
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
        </StyledForm>
      </StyledDiv>
    </PositionedDiv>
  );
}

const StyledParagraph = styled.p`
  font-size: 30px;
  position: relative;
  top: 40px;
  text-align: center;
`;
