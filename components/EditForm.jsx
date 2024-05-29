import StyledForm from "./Styles/StyledForm"
import StyledInput from "./Styles/StyleInput"
import StyledButton from "./Styles/StyledButton"
import styled from "styled-components"



export default function EditForm({selectedPet, onHandleMode, onSubmit}) {

    return (
    <StyledDiv>
    <StyledForm $variant="select" onSubmit={onSubmit}>
    <StyledInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet.name}
        $variant="name"
        required
      />
      <StyledButton $variant="updateEdit" type="submit" >Update</StyledButton>
    </StyledForm>
      <StyledButton $variant="cancelEdit" type="button" onClick={() => onHandleMode("livingroom")}>Cancel</StyledButton>
    </StyledDiv>
    )
}

const StyledDiv = styled.div`
display: grid;
grid-template-columns: 75% 25% ;
border: solid black;
border-radius: 5px;
margin: 10px;`