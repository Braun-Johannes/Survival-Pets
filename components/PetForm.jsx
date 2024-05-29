import StyledInput from "./Styles/StyleInput";
import StyledForm from "./Styles/StyledForm";
import StyledButton from "./Styles/StyledButton";

export default function PetForm({ selectedPet, onHandleSubmit }) {
  return (
    <StyledForm onSubmit={onHandleSubmit} $variant="select">
      <label htmlFor="nameInput">Choose a name</label>
      <StyledInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : ""}
        placeholder="name"
        $variant="name"
        required
      />
      <StyledButton disabled={!selectedPet} type="submit">Select</StyledButton>
    </StyledForm>
  );
}
