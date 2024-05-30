import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import { useState } from "react";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";
import EditForm from "@/components/EditForm";

export default function HomePage() {
  const [selectedPet, setSelectedPet] = useState();
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
        "Wer das hier findet, hat richtig getestet! Danke von den SurvivalPets"
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
          <CurrentPet selectedPet={selectedPet} />
          <CurrentPetStats selectedPet={selectedPet} handleMode={handleMode} />
        </>
      )}
      {mode === "edit" && (
        <>
          <StyledHeading $variant="livingroom">Living Room</StyledHeading>
          <CurrentPet selectedPet={selectedPet} />
          <EditForm
            selectedPet={selectedPet}
            onSubmit={handleSubmit}
            handleMode={handleMode}
          />
        </>
      )}
    </div>
  );
}
