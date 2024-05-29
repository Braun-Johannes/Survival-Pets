import StyledList from "./Styles/StyledList";
import StyledListItem from "./Styles/StyledListItem";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem $variant="select">{selectedPet.type}</StyledListItem>
    </StyledList>
  );
}
