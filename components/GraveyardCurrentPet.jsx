import styled from "styled-components";
import { formatPetsAge } from "@/utils";
import StyledDiv from "./Styles/StyledDiv";



export default function GraveyardCurrentPetCard({selectedPet, ageInSeconds}) {

    return (<div>
        <StyledLabel>Current Pet:</StyledLabel>
        <CurrentPetContainer>
        <p>Name:  {selectedPet.name}</p><br/>
        <p>Time Alive:  {formatPetsAge(ageInSeconds)} </p><br/>
        <p>Health:  {selectedPet.health}/100</p>
    </CurrentPetContainer>
    </div>)
}

const StyledLabel = styled.label`
font-size: 2rem;
padding-left: 10px;`

const CurrentPetContainer = styled.div`
display: grid;
grid-template-rows: repeat(3, auto);
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px;
`

