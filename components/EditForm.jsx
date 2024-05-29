import StyledForm from "./Styles/StyledForm"
import StyledInput from "./Styles/StyleInput"
import StyledButton from "./Styles/StyledButton"



export default function EditForm({selectedPet, onHandleMode, onSubmit}) {

    return (<>
    <StyledForm $variant="select" onSubmit={onSubmit}>
    <StyledInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet.name}
        $variant="name"
        required
      />
      <StyledButton type="submit" >Update</StyledButton>
      <StyledButton type="button" onClick={() => onHandleMode("livingroom")}>Cancel</StyledButton>
    </StyledForm>
    </>)
}