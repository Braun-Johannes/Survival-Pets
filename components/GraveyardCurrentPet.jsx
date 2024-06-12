import StyledDiv from "./Styles/StyledDiv";
import { formatPetsAge } from "@/utils";



export default function GraveyardCurrentPetCard({selectedPet, ageInSeconds}) {

    return (<StyledDiv>
        Name:  {selectedPet.name} <br/>
        Days Alive:  {formatPetsAge(ageInSeconds)} <br/>
        Health:  {selectedPet.health}/100
    </StyledDiv>)
}