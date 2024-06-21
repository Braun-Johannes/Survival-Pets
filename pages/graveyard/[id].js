import { useRouter } from "next/router";
import { formatPetsAge } from "@/utils";
import StyledLink from "@/components/Styles/StyledLink";
import StyledHeading from "@/components/Styles/StyledHeading";
import styled from "styled-components";
import PNGImage from "@/components/PNGImage";
export default function PetsDetail({ deceasedPets }) {
  const router = useRouter();
  const { id } = router.query;
  if (!deceasedPets) {
    return <div>...loading</div>;
  }
  const detailsPet = deceasedPets.find((pet) => pet.id === id);
  if (!detailsPet) {
    return <div>...loading</div>;
  }
  return (
    <>
      <StyledBackground>
        <StyledGrid>
          <div>
            <StyledLink href={"/graveyard"}> ←</StyledLink>
            <StyledHeading>{detailsPet.name}</StyledHeading>
          </div>
          <StyledPetContainer>
            <PNGImage
              variant={detailsPet.type}
              size={200}
              ariaLabel={detailsPet.type}
            />
          </StyledPetContainer>
          <PetInformation>
            <DeceasedPetContainer>
              <StyledP>Name: </StyledP>
              <StyledP>{detailsPet.name}</StyledP>
            </DeceasedPetContainer>
            <DeceasedPetContainer>
              <StyledP>Time Alive: </StyledP>
              <StyledP>{formatPetsAge(detailsPet.timeAlive)}</StyledP>
            </DeceasedPetContainer>
            <DeceasedPetContainer>
              <StyledP>Creation Date:</StyledP>
              <StyledP>{detailsPet.birthday}</StyledP>
            </DeceasedPetContainer>
            <DeceasedPetContainer>
              <StyledP>Death Date: </StyledP>
              <StyledP>{detailsPet.deathDate}</StyledP>
            </DeceasedPetContainer>
          </PetInformation>
        </StyledGrid>
      </StyledBackground>
    </>
  );
}
const StyledPetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeceasedPetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -10px;
  padding: 0;
`;
const StyledP = styled.p`
  font-size: 1.5rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% auto 30%;
  height: calc(100vh - 1rem);
`;
const StyledBackground = styled.div`
  background-image: url("/Images/Graveyard.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
const PetInformation = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 5px;
  background: white;
`;
