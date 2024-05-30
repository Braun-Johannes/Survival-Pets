import StyledForm from "./Styles/StyledForm";
import StyledInput from "./Styles/StyleInput";
import StyledButton from "./Styles/StyledButton";
import StyledDiv from "./Styles/StyledDiv";

export default function EditForm({ selectedPet, onHandleMode, onSubmit }) {
  return (
    <StyledDiv $variant="edit">
      <StyledForm $variant="edit" onSubmit={onSubmit}>
        <StyledInput
          id="nameInput"
          name="nameInput"
          type="text"
          defaultValue={selectedPet.name}
          $variant="name"
          required
        />
        <StyledButton $variant="updateEdit" type="submit">
          Update Name
        </StyledButton>
      </StyledForm>
      <StyledButton
        $variant="cancelEdit"
        type="button"
        onClick={() => onHandleMode("livingroom")}
      >
        Cancel
      </StyledButton>
    </StyledDiv>
  );
}
