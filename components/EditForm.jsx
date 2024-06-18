import StyledForm from "@/components/Styles/StyledForm";
import StyledInput from "@/components/Styles/StyleInput";
import StyledSection from "@/components/Styles/StyledSection";
import PositionedButton from "@/components/Styles/StyledButton";

export default function EditForm({
  selectedPet,
  onMode,
  onSubmit,
  onAddSnackbar,
}) {
  return (
    <StyledSection>
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
          $bottom="3rem"
          type="submit"
          onClick={() =>
            onAddSnackbar("You successfully changed your name", "edit")
          }
        >
          Update Name
        </PositionedButton>
        <PositionedButton
          $variant="cancel"
          $top="10px"
          $right="10px"
          type="button"
          onClick={() => onMode("livingroom")}
        >
          Cancel
        </PositionedButton>
      </StyledForm>
    </StyledSection>
  );
}
