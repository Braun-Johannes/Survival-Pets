import pets from "@/lib/pets";
import { StyledList, StyledListItem, ListButton } from "@/styles";

export default function PetList({ onSelectPet }) {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem key={pet.id}>
              <ListButton
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                {pet.name}
              </ListButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
