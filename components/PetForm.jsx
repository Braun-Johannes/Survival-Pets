import { StyledSelectForm, StyledNameInput } from "@/styles";

export default function PetForm({ selectedPet }) {
  return (
    <StyledSelectForm onSubmit={""}>
      <label htmlFor="nameInput">Choose a name</label>
      <StyledNameInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : ""}
        placeholder="name"
      />
      <button type="submit">Select</button>
    </StyledSelectForm>
  );
}
