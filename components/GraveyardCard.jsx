import { formatPetsAge } from "@/utils"
import styled from "styled-components"

export default function GraveyardCard({deceasedPet}) {
    return (
        <CardContainer>
         {deceasedPet.name}<br/> {deceasedPet.type}<br/> {formatPetsAge(Math.floor(deceasedPet.lastUpdated - deceasedPet.createdAt))}
        </CardContainer>
    )
}

const CardContainer = styled.div`
border: 2px solid black;
border-radius: 10px;
padding: 10px;
`