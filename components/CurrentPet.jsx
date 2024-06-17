import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import SVGIcon from "@/components/SVGIcon";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem $variant="select">
        <SVGIcon variant={selectedPet.type} size={200} />
      </StyledListItem>
    </StyledList>
  );
}
