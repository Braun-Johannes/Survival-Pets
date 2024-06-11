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
import InteractionMenu from "@/components/InteractionMenu";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { formatPetsAge } from "@/utils";

export default function HomePage({ onAddToast }) {
  const [selectedPet, setSelectedPet] = useLocalStorageState("selectedPet", {
    defaultValue: {},
  });
  const [mode, setMode] = useLocalStorageState("mode", {
    defaultValue: "select",
  });

  const [timeAlive, setTimeAlive] = useState(0);

  const isDead = selectedPet.health === 0;

  // _________________HANDLE STATES FUNCTIONS___________________________

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
  }
  function handleMode(mode) {
    setMode(mode);
  }

  function handleEliminate() {
    // store pets age
    setTimeAlive(Math.floor(Date.now() / 1000 - selectedPet.createdAt));

    const eliminatedPet = {
      ...selectedPet,
      health: 0,
      energy: 0,
      satiety: 0,
      happiness: 0,
    };
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
  // __________________________________________________________________

  // _______________HANDLE SUBMIT _____________________________________

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

    const currentTime =
      mode === "select" ? Date.now() / 1000 : selectedPet.createdAt;

    const updatedPet = {
      ...selectedPet,
      name: data.nameInput,
      lastUpdated: Date.now() / 1000,
      createdAt: currentTime,
    };
    setSelectedPet(updatedPet);

    setMode("livingroom");
  }
  // ___________________________________________________________________

  // __________________________TIME LOGIC_______________________________

  useEffect(() => {
    let interval;
    if (mode !== "select") {
      interval = setInterval(() => {
        setSelectedPet((prevPet) => {
          // calculate reduction based on elapsed time

          const currentTime = Math.floor(Date.now() / 1000);
          const elapsedTime = currentTime - Math.floor(prevPet.lastUpdated);

          const decreaseRate = 2;
          let health = prevPet.health;
          let satiety = prevPet.satiety;
          let energy = prevPet.energy;
          let happiness = prevPet.happiness;

          for (let t = 0; t < elapsedTime; t++) {
            if (satiety > 0) satiety = Math.max(0, satiety - decreaseRate);
            if (energy > 0) energy = Math.max(0, energy - decreaseRate);
            if (happiness > 0)
              happiness = Math.max(0, happiness - decreaseRate);

            const zeroCount =
              (satiety === 0) + (energy === 0) + (happiness === 0);
            const healthDecreaseRate = zeroCount * 1;

            health = Math.max(0, health - healthDecreaseRate);
          }
          return {
            ...prevPet,
            energy: energy,
            satiety: satiety,
            happiness: happiness,
            lastUpdated: currentTime,
            health: health,
          };
        });
      }, 100); // Check every 10th of a second
      return () => clearInterval(interval);
    }
  }, [selectedPet, setSelectedPet, mode]);

  const ageInSeconds =
    selectedPet && !isDead
      ? Math.floor(Date.now() / 1000 - selectedPet.createdAt)
      : timeAlive;

  // ___________________________________________________________________

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
            <PetForm
              selectedPet={selectedPet}
              onAddToast={onAddToast}
              onSubmit={handleSubmit}
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
            <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
            <StyledSection>
              <CurrentPet selectedPet={selectedPet} />
            </StyledSection>
            <EditForm
              selectedPet={selectedPet}
              onSubmit={handleSubmit}
              onMode={handleMode}
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

const StyledH2 = styled.h2`
  text-align: end;
  margin-right: 20px;
  font-size: 1.2rem;
`;
