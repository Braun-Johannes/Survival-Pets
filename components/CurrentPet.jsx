import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import SVGIcon from "./SVGIcon";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem $variant="select">
        <SVGIcon variant={selectedPet.type} size={300} />
      </StyledListItem>
    </StyledList>
  );
}
