import StyledInput from "./Styles/StyleInput";
import StyledForm from "./Styles/StyledForm";
import PositionedButton from "./Styles/StyledButton";

export default function PetForm({ selectedPet, onSubmit }) {
  return (
    <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
      <StyledForm onSubmit={onSubmit} $variant="select">
        <label htmlFor="nameInput">Choose a name</label>
        <StyledInput
          id="nameInput"
          name="nameInput"
          type="text"
          defaultValue={selectedPet ? selectedPet.name : ""}
          placeholder="name"
          $variant="name"
          maxLength={10}
          required
        />
        <PositionedButton
          position="static"
          $variant="confirm"
          disabled={!selectedPet}
          type="submit"
        >
          Select
        </PositionedButton>
      </StyledForm>
    </div>
  );
}
