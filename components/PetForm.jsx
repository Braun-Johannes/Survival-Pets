import StyledInput from "@/components/Styles/StyleInput";
import StyledSection from "./Styles/StyledSection";
import StyledForm from "@/components/Styles/StyledForm";
import PositionedButton from "@/components/Styles/StyledButton";

export default function PetForm({ selectedPet, onSubmit, onAddSnackbar }) {
  return (
    <StyledForm onSubmit={onSubmit} $variant="select">
      <label htmlFor="nameInput">Choose a name</label>
      <StyledInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : ""}
        placeholder="maximum 10 characters.."
        $variant="name"
        maxLength={10}
        required
      />
      <PositionedButton
        $position="static"
        $variant="confirm"
        disabled={!selectedPet.id}
        type="submit"
        onClick={() => onAddSnackbar("You successfully selected your pet!")}
      >
        Select
      </PositionedButton>
    </StyledForm>
  );
}
