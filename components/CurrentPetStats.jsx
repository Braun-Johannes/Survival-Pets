import { StyledStatKey } from "@/styles";
import StyledStatsContainer from "./Styles/StyledStatsContainer";
import StyledListItem from "./Styles/StyledListItem";

export default function CurrentPetStats({ selectedPet }) {
  return (
    <StyledStatsContainer>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Name</StyledStatKey>
        <br />
        {selectedPet.name}
      </StyledListItem>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Type</StyledStatKey>
        <br /> {selectedPet.type}
      </StyledListItem>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Health</StyledStatKey>
        <br /> {selectedPet.health}/100
      </StyledListItem>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Happiness</StyledStatKey>
        <br />
        {selectedPet.happiness}/100
      </StyledListItem>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Satiety</StyledStatKey>
        <br />
        {selectedPet.satiety}/100
      </StyledListItem>
      <StyledListItem $variant="livingroom">
        <StyledStatKey>Energy</StyledStatKey>
        <br />
        {selectedPet.energy}/100
      </StyledListItem>
    </StyledStatsContainer>
  );
}
