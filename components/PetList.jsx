import pets from "@/lib/pets";
import { StyledList, StyledListItem, ListButton } from "@/styles";

export default function PetList() {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem key={pet.id}>
              <ListButton>{pet.name}</ListButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
