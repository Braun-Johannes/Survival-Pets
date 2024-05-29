import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import { useState } from "react";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";

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

    const updatedPet = { ...selectedPet, name: data.nameInput };
    setSelectedPet(updatedPet);

    setMode("livingroom");
  }

  return (
    <div>
      {mode === "select" && (
        <>
          <StyledHeading $variant="select">Select a Survival Pet</StyledHeading>
          <PetList onSelectPet={handleSelectPet} selectedPet={selectedPet} />
          <PetForm selectedPet={selectedPet} onHandleSubmit={handleSubmit} />
        </>
      )}

      {mode === "livingroom" && (
        <>
          <StyledHeading $variant="livingroom">Living Room</StyledHeading>
          <CurrentPet selectedPet={selectedPet} />
          <CurrentPetStats selectedPet={selectedPet} />
        </>
      )}
    </div>
  );
}
