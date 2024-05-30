import pets from "@/lib/pets";
import StyledList from "./Styles/StyledList";
import StyledListItem from "./Styles/StyledListItem";
import PositionedButton from "./Styles/StyledButton";

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
              <PositionedButton
                $variant="highlight"
                position="static"
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                {pet.type}
              </PositionedButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
