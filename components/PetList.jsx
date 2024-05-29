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
              style={{ border: selectedPet === pet ? "2px solid orange" : "" }}
              key={pet.id}
              $variant="select"
            >
              <StyledButton
                onClick={() => {
                  onSelectPet(pet);
                }}
                $variant="select"
              >
                {pet.name}
              </StyledButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
