import styled from "styled-components";
import { formatPetsAge } from "@/utils";



export default function GraveyardCurrentPetCard({selectedPet, ageInSeconds}) {

    return (<section>
        <CurrentPetContainer>
        <StyledLabel>Current Pet:</StyledLabel>
        <StyledP>Name:</StyledP> <StyledP>{selectedPet.name}</StyledP>
        <StyledP>Time Alive:</StyledP> <StyledP>{formatPetsAge(ageInSeconds)}</StyledP>
        <StyledP>Health:</StyledP> <StyledP>{selectedPet.health}/100</StyledP>
    </CurrentPetContainer>
    </section>)
}

const StyledLabel = styled.label`
position: absolute;
font-size: 2rem;
left: 0;
background: white;
top: -46px;`

const StyledP = styled.p`
font-size: 1.5rem;
padding-left: 5rem;
`


const CurrentPetContainer = styled.div`
display: grid;
position: fixed;
bottom: 0;
width: calc(100vw - 1rem);
background: white;
grid-template-rows: repeat(3, auto);
grid-template-columns: repeat(2, auto);
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px 10px 1px 10px;
`

