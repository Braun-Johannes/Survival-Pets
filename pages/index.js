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

export default function HomePage() {
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
    if (selectedPet) {
      const interval = setInterval(() => {
        setSelectedPet((prevPet) => {
          // calculate reduction based on elapsed time
          const currentTime = Date.now() / 1000;
          const elapsedTime = currentTime - prevPet.lastUpdated;
          const reduction = Math.floor(elapsedTime) * 0.1; // --> parameter for stat reduction

          // decrease stats over time

          if (reduction > 0) {
            if (prevPet.health === 0) {
              return prevPet;
            }
            const newEnergy = Math.min(
              Math.max(prevPet.energy - reduction, 0),
              100
            );
            const newSatiety = Math.min(
              Math.max(prevPet.satiety - reduction, 0),
              100
            );
            const newHappiness = Math.min(
              Math.max(prevPet.happiness - reduction, 0),
              100
            );

            // decrease health based on how many stats are at zero

            const stats = [newEnergy, newSatiety, newHappiness];
            const statsAtZero = stats.filter((value) => value === 0).length;
            const healthReduction = statsAtZero * 2; // --> Parameter for health reduction
            const newHealth =
              statsAtZero > 0
                ? Math.min(Math.max(prevPet.health - healthReduction, 0), 100)
                : prevPet.health;

            if (newHealth === 0) {
              setTimeAlive(Math.floor(currentTime - prevPet.createdAt));
            }
            return {
              ...prevPet,
              energy: newEnergy,
              satiety: newSatiety,
              happiness: newHappiness,
              lastUpdated: currentTime,
              health: newHealth,
            };
          }

          return prevPet;
        });
      }, 100); // Check every 10th of a second
      return () => clearInterval(interval);
    }
  }, [selectedPet, setSelectedPet]);

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
            <PetForm selectedPet={selectedPet} onSubmit={handleSubmit} />
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

const StyledH2 = styled.h2`
  text-align: end;
  margin-right: 20px;
  font-size: 1.2rem;
`;
