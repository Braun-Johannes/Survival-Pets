import { StyledSelectForm, StyledNameInput } from "@/styles";

export default function PetForm({ selectedPet }) {
  return (
    <StyledSelectForm onSubmit={""}>
      <label htmlFor="nameInput"></label>
      <StyledNameInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : "Name"}
      />
      <button type="submit">Select</button>
    </StyledSelectForm>
  );
}
