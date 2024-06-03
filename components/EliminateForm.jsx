import StyledForm from "@/components/Styles/StyledForm";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import PositionedDiv from "@/components/Styles/PositionedDiv";
import styled from "styled-components";

export default function EliminateForm({ onEliminate, onMode, onSubmit }) {
  return (
    <PositionedDiv>
      <StyledDiv>
        <StyledForm onSubmit={onSubmit}>
          <StyledParagraph>
            Are you sure you want to eliminate your pet?
          </StyledParagraph>
          <PositionedButton
            $variant="confirm"
            bottom="85px"
            right="400px"
            type="button"
            onClick={() => onEliminate()}
          >
            Confirm
          </PositionedButton>
        </StyledForm>
        <PositionedButton
          $variant="cancel"
          bottom="85px"
          right="300px"
          type="button"
          onClick={() => onMode("livingroom")}
        >
          Cancel
        </PositionedButton>
      </StyledDiv>
    </PositionedDiv>
  );
}

const StyledParagraph = styled.p`
  font-size: 30px;
  position: absolute;
  top: 30px;
  text-align: center;
`;
