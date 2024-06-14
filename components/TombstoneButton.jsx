import PositionedButton from "@/components/Styles/StyledButton";

export default function TombstoneButton({ selectedPet, onDeletePet }) {
  return (
      <div $variant="tombstone">
        <PositionedButton
          onClick={onDeletePet}
          $variant="tombstone"
          position="static"
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
      </div>
  );
}
