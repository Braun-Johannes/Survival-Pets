import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import { useState, useEffect } from "react";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";
import EditForm from "@/components/EditForm";
import EliminateForm from "@/components/EliminateForm";
import pets from "@/lib/pets";
import TombstoneButton from "@/components/TombstoneButton";

export default function HomePage() {
  const [selectedPet, setSelectedPet] = useState(pets);
  const [mode, setMode] = useState("select");

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
  const isDead = selectedPet.health === 0;

  function handleDeletePet() {
    setSelectedPet("");
    setMode("select");
  }

  return (
    <div>
      {mode === "select" && (
        <>
          <StyledHeading $variant="select">Select a Survival Pet</StyledHeading>
          <PetList onSelectPet={handleSelectPet} selectedPet={selectedPet} />
          <PetForm selectedPet={selectedPet} onSubmit={handleSubmit} />
        </>
      )}

      {mode === "livingroom" && (
        <>
          <StyledHeading $variant="livingroom">Living Room</StyledHeading>
          {!isDead ? (
            <CurrentPet selectedPet={selectedPet} />
          ) : (
            <TombstoneButton
              selectedPet={selectedPet}
              onMode={handleMode}
              onDeletePet={handleDeletePet}
            />
          )}
          <CurrentPetStats selectedPet={selectedPet} onMode={handleMode} />
        </>
      )}

      {mode === "edit" && (
        <>
          <StyledHeading $variant="livingroom">Living Room</StyledHeading>
          <CurrentPet selectedPet={selectedPet} />
          <EditForm
            selectedPet={selectedPet}
            onSubmit={handleSubmit}
            onMode={handleMode}
          />
        </>
      )}

      {mode === "eliminate" && (
        <>
          <StyledHeading $variant="livingroom">Living Room</StyledHeading>
          <CurrentPet selectedPet={selectedPet} />
          <EliminateForm
            selectedPet={selectedPet}
            onMode={handleMode}
            onEliminate={handleEliminate}
          />
        </>
      )}
    </div>
  );
}
