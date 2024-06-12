import GraveyardCard from "@/components/GraveyardCard";
import StyledHeading from "@/components/Styles/StyledHeading"
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import Link from "next/link";
import styled from "styled-components";


export default function Graveyard({deceasedPets}) {
   

    
    return(<>
    <StyledGrid>
        <div>
            <StyledLink href={"/"}> Back</StyledLink>
    <StyledHeading>Graveyard</StyledHeading>
    </div>
    <StyledList $variant="graveyard"> {deceasedPets.map((deceasedPet) => {return <StyledListItem $variant="graveyard" key={deceasedPet.key}>
        <GraveyardCard deceasedPet={deceasedPet}/>
    </StyledListItem>
    })}</StyledList>
    <div></div>
    </StyledGrid>
    </>)
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

const StyledLink = styled(Link)`
color: black;
margin: 10 px
`
