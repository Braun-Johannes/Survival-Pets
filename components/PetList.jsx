import pets from "@/lib/pets";
import StyledListButton from "./Styles/StyledListButton";
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
