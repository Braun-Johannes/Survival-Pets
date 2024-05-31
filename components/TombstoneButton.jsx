import PositionedButton from "@/components/Styles/StyledButton";
import StyledDiv from "@/components/Styles/StyledDiv";

export default function TombstoneButton({ selectedPet, onDeletePet }) {
  return (
    <>
      <StyledDiv $variant="tombstone">
        <PositionedButton
          onClick={onDeletePet}
          $variant="tombstone"
          position="absolute"
          top="60px"
        >
          <p>R.I.P.</p>
          <p>{selectedPet.name}</p>
          <p>Select a new Survival Pet</p>
        </PositionedButton>
      </StyledDiv>
    </>
  );
}
