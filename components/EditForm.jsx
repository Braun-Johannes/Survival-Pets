import StyledForm from "./Styles/StyledForm";
import StyledInput from "./Styles/StyleInput";
import StyledButton from "./Styles/StyledButton";
import StyledDiv from "./Styles/StyledDiv";

export default function EditForm({ selectedPet, handleMode, onSubmit }) {
  return (
    <StyledDiv>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          id="nameInput"
          name="nameInput"
          type="text"
          defaultValue={selectedPet.name}
          $variant="name"
          required
        />
        <StyledButton type="submit">Update Name</StyledButton>
      </StyledForm>
      <StyledButton
        $variant="cancelEdit"
        type="button"
        onClick={() => handleMode("livingroom")}
      >
        Cancel
      </StyledButton>
    </StyledDiv>
  );
}
