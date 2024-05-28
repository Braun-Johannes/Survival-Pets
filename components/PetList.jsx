import pets from "@/lib/pets";
import { StyledList, StyledListItem, StyledListButton } from "@/styles";

export default function PetList({ onSelectPet, selectedPet }) {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem
              style={{ border: selectedPet === pet ? "2px solid orange" : "" }}
              key={pet.id}
            >
              <StyledListButton
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                {pet.name}
              </StyledListButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
