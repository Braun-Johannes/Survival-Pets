import GraveyardCard from "@/components/GraveyardCard";
import StyledHeading from "@/components/Styles/StyledHeading";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import GraveyardCurrentPetCard from "@/components/GraveyardCurrentPet";
import Link from "next/link";
import styled from "styled-components";

export default function graveyard({ deceasedPets, selectedPet, ageInSeconds }) {
  return (
    <>
      <StyledBackground $hasDeceasedPets={deceasedPets}>
        <StyledGrid>
          <div>
            <StyledLink href={"/"}> ←</StyledLink>
            <StyledHeading>Graveyard</StyledHeading>
          </div>

          {deceasedPets ? (
            <StyledList $variant="graveyard">
              {" "}
              {deceasedPets.map((deceasedPet) => {
                return (
                  <StyledListItem $variant="graveyard" key={deceasedPet.id}>
                    <GraveyardCard deceasedPet={deceasedPet} />
                  </StyledListItem>
                );
              })}
            </StyledList>
          ) : (
            <StyledH2>
              No animals in the graveyard yet. You are doing a great job!
            </StyledH2>
          )}
        </StyledGrid>
        <GraveyardCurrentPetCard
          selectedPet={selectedPet}
          ageInSeconds={ageInSeconds}
        ></GraveyardCurrentPetCard>
      </StyledBackground>
    </>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
`;

const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  color: black;
  font-size: 3rem;
  margin-left: 10px;
`;

const StyledBackground = styled.div`
  background-image: url("/Images/Graveyard2.png");
  background-size: cover;
  background-position: center;

  background-attachment: fixed;
  height: ${(props) => (props.$hasDeceasedPets ? "auto" : "100vh")};
`;

const StyledH2 = styled.h2`
  text-align: center;
`;
