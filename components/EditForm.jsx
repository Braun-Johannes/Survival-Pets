import StyledForm from "@/components/Styles/StyledForm";
import StyledInput from "@/components/Styles/StyleInput";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";

export default function EditForm({
  selectedPet,
  onMode,
  onSubmit,
  onAddToast,
}) {
  return (
    <StyledDiv>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          id="nameInput"
          name="nameInput"
          type="text"
          maxLength={10}
          defaultValue={selectedPet.name}
          $variant="name"
          required
        />
        <PositionedButton
          $variant="confirm"
          $bottom="85px"
          type="submit"
          onClick={() =>
            onAddToast("You successfully changed your name", "warning")
          }
        >
          Update Name
        </PositionedButton>
      </StyledForm>
      <PositionedButton
        $variant="cancel"
        $top="10px"
        $right="10px"
        type="button"
        onClick={() => onMode("livingroom")}
      >
        Cancel
      </PositionedButton>
    </StyledDiv>
  );
}
