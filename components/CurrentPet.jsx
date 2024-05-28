import { StyledList, StyledListItem } from "@/styles";

export default function CurrentPet({ currentPet }) {
  return (
    <StyledList>
      <StyledListItem>{currentPet.name}</StyledListItem>
    </StyledList>
  );
}
