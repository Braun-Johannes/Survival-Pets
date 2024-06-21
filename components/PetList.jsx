import pets from "@/lib/pets";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import PositionedButton from "@/components/Styles/StyledButton";
import PNGImage from "@/components/PNGImage";

export default function PetList({ onSelectPet, selectedPet }) {
  const filteredPets = pets.filter((pet) => pet.name !== "Doemser");
  return (
    <>
      <StyledList $variant="select">
        {filteredPets.map((pet) => {
          return (
            <StyledListItem
              $selected={selectedPet.id === pet.id}
              key={pet.id}
              $variant="select"
            >
              <PositionedButton
                $variant="highlight"
                $position="static"
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                <PNGImage variant={pet.type} size={100} ariaLabel={pet.type} />
              </PositionedButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
