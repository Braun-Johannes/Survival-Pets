import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import { useState } from "react";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";
import EditForm from "@/components/EditForm";
import EliminateForm from "@/components/EliminateForm";
import TombstoneButton from "@/components/TombstoneButton";
import StyledSection from "@/components/Styles/StyledSection";
import styled from "styled-components";
import InteractionMenu from "@/components/InteractionMenu";
import useLocalStorageState from "use-local-storage-state";

export default function HomePage() {
  const [selectedPet, setSelectedPet] = useLocalStorageState("selectedPet", {
    defaultValue: {},
  });
  const [mode, setMode] = useLocalStorageState("mode", {
    defaultValue: "select",
  });

  let isDead = false;

  if (selectedPet) {
    isDead = selectedPet.health === 0;
  }

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.nameInput.trim() === "") {
      alert(
        "Wer das hier findet, hat richtig getestet! Danke von den SurvivalPets - Please insert a Name!"
      );
      return;
    }

    const updatedPet = { ...selectedPet, name: data.nameInput };
    setSelectedPet(updatedPet);

    setMode("livingroom");
  }

  function handleMode(mode) {
    setMode(mode);
  }

  function handleEliminate() {
    const eliminatedPet = { ...selectedPet, health: 0 };
    setSelectedPet(eliminatedPet);
    setMode("livingroom");
  }

  function handleDeletePet() {
    setSelectedPet("");
    setMode("select");
  }

  function handleIncreaseStats(attribute, steps) {
    setSelectedPet((prevPet) => {
      const newValue = Math.min(prevPet[attribute] + steps, 100);
      return {
        ...prevPet,
        [attribute]: newValue,
      };
    });
  }

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
                onSelectPet={handleSelectPet}
                selectedPet={selectedPet}
              />
            </StyledSection>
            <PetForm selectedPet={selectedPet} onSubmit={handleSubmit} />
          </StyledGrid>
        </>
      )}

      {mode === "livingroom" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            {!isDead ? (
              <StyledContainer>
                <div></div>
                <StyledSection>
                  <CurrentPet selectedPet={selectedPet} />
                </StyledSection>
                <InteractionMenu onIncreaseStats={handleIncreaseStats} />
              </StyledContainer>
            ) : (
              <StyledSection>
                <TombstoneButton
                  selectedPet={selectedPet}
                  onMode={handleMode}
                  onDeletePet={handleDeletePet}
                />
              </StyledSection>
            )}
            <CurrentPetStats
              isDead={isDead}
              selectedPet={selectedPet}
              onMode={handleMode}
            />
          </StyledGrid>
        </>
      )}

      {mode === "edit" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            <StyledSection>
              <CurrentPet selectedPet={selectedPet} />
            </StyledSection>
            <EditForm
              selectedPet={selectedPet}
              onSubmit={handleSubmit}
              onMode={handleMode}
            />
          </StyledGrid>
        </>
      )}

      {mode === "eliminate" && (
        <>
          <StyledGrid>
            <StyledHeading $variant="livingroom">Living Room</StyledHeading>
            <StyledSection>
              <CurrentPet selectedPet={selectedPet} />
            </StyledSection>
            <EliminateForm
              selectedPet={selectedPet}
              onMode={handleMode}
              onEliminate={handleEliminate}
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
