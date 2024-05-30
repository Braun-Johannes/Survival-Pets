import StyledInput from "./Styles/StyleInput";
import StyledForm from "./Styles/StyledForm";
import StyledButton from "./Styles/StyledButton";

export default function PetForm({ selectedPet, onSubmit }) {
  return (
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
      <StyledButton disabled={!selectedPet} type="submit">
        Select
      </StyledButton>
    </StyledForm>
  );
}
