import PositionedButton from "./Styles/StyledButton";
import StyledDiv from "./Styles/StyledDiv";

export default function TombstoneButton({ selectedPet, onDeletePet }) {
  return (
    <>
      <StyledDiv $variant="tombstone">
        <PositionedButton onClick={onDeletePet} $variant="tombstone">
          <p>R.I.P.</p>
          <p>{selectedPet.name}</p>
          <p>Select a new Survival Pet</p>
        </PositionedButton>
      </StyledDiv>
    </>
  );
}
