import GraveyardCard from "@/components/GraveyardCard";
import StyledHeading from "@/components/Styles/StyledHeading";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import GraveyardCurrentPetCard from "@/components/GraveyardCurrentPet";
import StyledLink from "@/components/Styles/StyledLink";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const FilterDropdown = styled.select``;

export default function Graveyard({ deceasedPets, selectedPet, ageInSeconds }) {
  const [filter, setFilter] = useState("createdAt");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const sortedDeceasedPets = deceasedPets.sort((a, b) => {
    switch (filter) {
      case "timeAliveAsc":
        return a.timeAlive - b.timeAlive;
      case "timeAliveDesc":
        return b.timeAlive - a.timeAlive;
      case "name":
        return a.name.localeCompare(b.name);
      case "type":
        return a.type.localeCompare(b.type);
      case "createdAt":
      default:
        return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  return (
    <>
      <StyledBackground $hasDeceasedPets={deceasedPets}>
        <StyledGrid>
          <div>
            <StyledLink href={"/"}> ←</StyledLink>
            <StyledHeading>Graveyard</StyledHeading>
          </div>
          <FilterDropdown onChange={handleFilterChange} value={filter}>
            <option value="createdAt">Created At</option>
            <option value="timeAliveAsc">Time Alive - Ascending</option>
            <option value="timeAliveDesc">Time Alive - Descending</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </FilterDropdown>
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

const StyledCardLink = styled(Link)`
  text-decoration: none;
  color: black;
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
