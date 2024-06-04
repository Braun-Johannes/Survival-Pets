import StyledInput from "@/components/Styles/StyleInput";
import StyledForm from "@/components/Styles/StyledForm";
import PositionedButton from "@/components/Styles/StyledButton";

export default function PetForm({ selectedPet, onSubmit }) {
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
          position="static"
          $variant="confirm"
          disabled={!selectedPet}
          type="submit"
        >
          Select
        </PositionedButton>
      </StyledForm>
  );
}
