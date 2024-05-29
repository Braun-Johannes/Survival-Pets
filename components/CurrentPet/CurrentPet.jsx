import StyledList from "../Styles/StyledList";
import StyledListItem from "../Styles/StyledListItem";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem>{selectedPet.name}</StyledListItem>
    </StyledList>
  );
}
