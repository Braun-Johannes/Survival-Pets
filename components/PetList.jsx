import pets from "@/lib/pets";
import StyledButton from "./Styles/StyledButton";
import StyledList from "./Styles/StyledList";
import StyledListItem from "./Styles/StyledListItem";

export default function PetList({ onSelectPet, selectedPet }) {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem
              $selected={selectedPet === pet}
              key={pet.id}
              $variant="select"
            >
              <StyledButton
                $variant="highlight"
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                {pet.type}
              </StyledButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
