import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";
import { formatPetsAge } from "@/utils";
import StyledLink from "@/components/Styles/StyledLink";
import StyledHeading from "@/components/Styles/StyledHeading";
import styled from "styled-components";

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
      <StyledGrid>
        <div>
          <StyledLink href={"/graveyard"}> ←</StyledLink>
          <StyledHeading>{detailsPet.name}</StyledHeading>
        </div>
        <StyledPetContainer>
          <SVGIcon
            variant={detailsPet.type}
            size={100}
            ariaLabel={detailsPet.type}
          />
        </StyledPetContainer>
        <DeceasedPetContainer>
          <StyledP>Name: </StyledP>
          <StyledP>{detailsPet.name}</StyledP>

          <StyledP>Time Alive: </StyledP>
          <StyledP>
            {formatPetsAge(
              Math.floor(detailsPet.lastUpdated - detailsPet.createdAt)
            )}
          </StyledP>

          <StyledP>Creation Date:</StyledP>
          <StyledP>{detailsPet.birthday}</StyledP>

          <StyledP>Death Date: </StyledP>
          <StyledP>{detailsPet.deathDate}</StyledP>
        </DeceasedPetContainer>
      </StyledGrid>
    </>
  );
}

const StyledPetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeceasedPetContainer = styled.div`
  display: grid;
  position: fixed;
  bottom: 0;
  background: white;
  grid-template-columns: auto auto;
  border: 3px solid black;
  border-radius: 10px;
  width: 100vw;
  margin-left: 1px;
  margin-right: 1px;
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  padding-left: 5rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% auto 30%;
  height: calc(100vh - 1rem);
`;
