import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import PNGImage from "./PNGImage";

export default function CurrentPet({ selectedPet }) {
  return (
    <StyledList>
      <StyledListItem $variant="livingroom">
        <PNGImage
          variant={selectedPet.type}
          size={200}
          ariaLabel={selectedPet.type}
        />
      </StyledListItem>
    </StyledList>
  );
}
