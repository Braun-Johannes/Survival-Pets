import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem $variant="select">{selectedPet.type}</StyledListItem>
    </StyledList>
  );
}
