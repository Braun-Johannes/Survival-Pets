import StyledForm from "./Styles/StyledForm";
import StyledInput from "./Styles/StyleInput";
import StyledDiv from "./Styles/StyledDiv";
import PositionedButton from "./Styles/StyledButton";

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
        <PositionedButton $variant="confirm" bottom="85px" type="submit">
          Update Name
        </PositionedButton>
      </StyledForm>
      <PositionedButton
        $variant="cancel"
        top="10px"
        right="10px"
        type="button"
        onClick={() => handleMode("livingroom")}
      >
        Cancel
      </PositionedButton>
    </StyledDiv>
  );
}
