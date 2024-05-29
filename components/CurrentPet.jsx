import { StyledList, StyledListItem } from "@/styles";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem>{selectedPet.name}</StyledListItem>
    </StyledList>
  );
}
