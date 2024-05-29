import StyledForm from "./Styles/StyledForm"
import StyledInput from "./Styles/StyleInput"



export default function EditForm() {

    return (<>
    <StyledForm>
    <StyledInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : ""}
        $variant="name"
        required
      />
    </StyledForm>
    </>)
}