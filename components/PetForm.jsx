import { StyledSelectForm, StyledNameInput } from "@/styles";

export default function PetForm() {
  return (
    <StyledSelectForm onSubmit={""}>
      <label htmlFor="nameInput"></label>
      <StyledNameInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={"Name"}
      />
      <button type="submit">Select</button>
    </StyledSelectForm>
  );
}
