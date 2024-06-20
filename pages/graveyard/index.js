import GraveyardCard from "@/components/GraveyardCard";
import StyledHeading from "@/components/Styles/StyledHeading";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import GraveyardCurrentPetCard from "@/components/GraveyardCurrentPet";
import DropdownMenu from "@/components/DropdownMenu";
import StyledLink from "@/components/Styles/StyledLink";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

export default function Graveyard({ deceasedPets, selectedPet, ageInSeconds }) {
  const [filter, setFilter] = useState("Created At");

  function handleFilterChange(selectedOption) {
    sortedDeceasedPets(selectedOption);
    setFilter(selectedOption);
  }

  function sortedDeceasedPets(filter) {
    if (!deceasedPets) {
      return;
    }
    deceasedPets.sort((a, b) => {
      switch (filter) {
        case "Time Alive - Descending":
          return a.timeAlive - b.timeAlive;
        case "Time Alive - Ascending":
          return b.timeAlive - a.timeAlive;
        case "Name":
          return a.name.localeCompare(b.name);
        case "Type":
          return a.type.localeCompare(b.type);
        case "Created At":
        default:
          return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
  }

  return (
    <>
      <StyledBackground
        $hasDeceasedPets={deceasedPets}
        $backgroundImage="/Images/Graveyard2.png"
      >
        <StyledGrid>
          <div>
            <StyledLink href={"/"}> ←</StyledLink>
            <StyledHeading>Graveyard</StyledHeading>
          </div>
          <DropdownMenu
            options={[
              "Created At",
              "Time Alive - Ascending",
              "Time Alive - Descending",
              "Name",
              "Type",
            ]}
            selectedOption={filter}
            onOptionSelect={handleFilterChange}
          />

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
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  height: ${(props) => (props.$hasDeceasedPets ? "auto" : "100vh")};
  background-image: url(${(props) => props.$backgroundImage});
`;

const StyledH2 = styled.h2`
  text-align: center;
  color: white;
  text-shadow: 2px 2px 2px black;
`;
