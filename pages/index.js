import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";
import EditForm from "@/components/EditForm";
import EliminateForm from "@/components/EliminateForm";
import TombstoneButton from "@/components/TombstoneButton";
import StyledSection from "@/components/Styles/StyledSection";
import styled from "styled-components";
import Link from "next/link";
import InteractionMenu from "@/components/InteractionMenu";

import { formatPetsAge } from "@/utils";

export default function HomePage({selectedPet, mode, isDead, onSelectPet, onSubmit, onIncreaseStats,onEliminate, onMode, onDeletePet, ageInSeconds}) {
  
  return (
    <>
      {mode === "select" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="select">
              Select a Survival Pet
            </StyledHeading>
            <StyledSection>
              <PetList
                onSelectPet={onSelectPet}
                selectedPet={selectedPet}
              />
            </StyledSection>
            <PetForm selectedPet={selectedPet} onSubmit={onSubmit} />
          </StyledGrid>
        </>
      )}

      {mode === "livingroom" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            {!isDead && (
              <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
            )}
            {!isDead ? (
              <StyledContainer>
                <StyledLink href={"/Graveyard"}>Graveyard</StyledLink>
                <StyledSection>
                  <CurrentPet selectedPet={selectedPet} />
                </StyledSection>
                <InteractionMenu onIncreaseStats={onIncreaseStats} />
              </StyledContainer>
            ) : (
              <StyledSection>
                <TombstoneButton
                  selectedPet={selectedPet}
                  onMode={onMode}
                  onDeletePet={onDeletePet}
                />
              </StyledSection>
            )}
            <CurrentPetStats
              isDead={isDead}
              selectedPet={selectedPet}
              onMode={onMode}
            />
          </StyledGrid>
        </>
      )}

      {mode === "edit" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
            <StyledSection>
              <CurrentPet selectedPet={selectedPet} />
            </StyledSection>
            <EditForm
              selectedPet={selectedPet}
              onSubmit={onSubmit}
              onMode={onMode}
            />
          </StyledGrid>
        </>
      )}

      {mode === "eliminate" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
            <StyledSection>
              <CurrentPet selectedPet={selectedPet} />
            </StyledSection>
            <EliminateForm
              selectedPet={selectedPet}
              onMode={onMode}
              onEliminate={onEliminate}
            />
          </StyledGrid>
        </>
      )}
    </>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;
const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  min-height: 400px;
`;

const StyledH2 = styled.h2`
  text-align: end;
  margin-right: 20px;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
color: black`