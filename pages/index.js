import PetList from "@/components/PetList";
import { StyledHeading } from "@/styles";
import PetForm from "@/components/PetForm";
import { useState } from "react";

export default function HomePage() {
  const [selectedPet, setSelectedPet] = useState();
  const [currentPet, setCurrentPet] = useState();
  const [mode, setMode] = useState("select");

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSelectedPet({ ...selectedPet, name: data.nameInput });
  }

  return (
    <>
      <StyledHeading>Select a Survival Pet</StyledHeading>
      <PetList onSelectPet={handleSelectPet} selectedPet={selectedPet} />
      <PetForm selectedPet={selectedPet} onHandleSubmit={handleSubmit} />
    </>
  );
}
