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
import SVGIcon from "@/components/SVGIcon";

export default function HomePage({
  selectedPet,
  mode,
  isDead,
  onSelectPet,
  onSubmit,
  onIncreaseStats,
  onEliminate,
  onMode,
  onDeletePet,
  ageInSeconds,
  onAddToast,
}) {
  return (
    <>
      {mode === "select" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="select">
              Select a Survival Pet
            </StyledHeading>
            <StyledSection>
              <PetList onSelectPet={onSelectPet} selectedPet={selectedPet} />
            </StyledSection>
            <PetForm
              selectedPet={selectedPet}
              onSubmit={onSubmit}
              onAddToast={onAddToast}
            />
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
                <div>
                  <StyledLink href={"/graveyard"}>
                    <SVGIcon variant="graveyard" />
                  </StyledLink>
                </div>
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
              onAddToast={onAddToast}
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
  text-decoration: none;
  color: black;
  align-items: flex;
  padding: 5px;
  border-radius: 40%;
  border-right: 3px black solid;
  border-left: 3px black solid;
  border-bottom: 3px black solid;
  margin-left: 30%;
  background-color: lightgrey;
`;
