import PositionedButton from "@/components/Styles/StyledButton";
import StyledDiv from "@/components/Styles/StyledDiv";

export default function TombstoneButton({ selectedPet, onDeletePet }) {
  return (
    <>
      <StyledDiv $variant="tombstone">
        <PositionedButton
          onClick={onDeletePet}
          $variant="tombstone"
          $position="relative"
        >
          <p>R.I.P.</p>
          <p>{selectedPet.name}</p>
          <hr />
          <br />
          <p>
            Click here <br /> to select a
            <br /> new Survival Pet
          </p>
        </PositionedButton>
      </StyledDiv>
    </>
  );
}
