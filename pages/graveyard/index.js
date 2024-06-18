import GraveyardCard from "@/components/GraveyardCard";
import StyledHeading from "@/components/Styles/StyledHeading";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import GraveyardCurrentPetCard from "@/components/GraveyardCurrentPet";
import Link from "next/link";
import styled from "styled-components";
import StyledLink from "@/components/Styles/StyledLink";

export default function graveyard({ deceasedPets, selectedPet, ageInSeconds }) {
  return (
    <>
      <div>
        <StyledLink href={"/"}> ←</StyledLink>
        <StyledHeading>Graveyard</StyledHeading>
      </div>
      <StyledGrid>
        {deceasedPets ? (
          <StyledList $variant="graveyard">
            {" "}
            {deceasedPets.map((deceasedPet) => {
              return (
                <StyledCardLink
                  key={deceasedPet.id}
                  href={`/graveyard/${deceasedPet.id}`}
                >
                  <StyledListItem $variant="graveyard" key={deceasedPet.id}>
                    <GraveyardCard deceasedPet={deceasedPet} />
                  </StyledListItem>
                </StyledCardLink>
              );
            })}
          </StyledList>
        ) : (
          <StyledHeading>
            No animals in the graveyard yet. You are doing a great job!
          </StyledHeading>
        )}
      </StyledGrid>
      <GraveyardCurrentPetCard
        selectedPet={selectedPet}
        ageInSeconds={ageInSeconds}
      ></GraveyardCurrentPetCard>
    </>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
`;

const StyledCardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
