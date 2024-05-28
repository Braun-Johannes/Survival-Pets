import PetList from "@/components/PetList";
import { StyledHeading } from "@/styles";
import PetForm from "@/components/PetForm";
import { useState } from "react";

export default function HomePage() {
  const [selectedPet, setSelectedPet] = useState();

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
  }

  return (
    <>
      <StyledHeading>Select a Survival Pet</StyledHeading>
      <PetList onSelectPet={handleSelectPet} />
      <PetForm selectedPet={selectedPet} />
    </>
  );
}
