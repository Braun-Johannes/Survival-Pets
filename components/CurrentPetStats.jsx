import {
  StyledStatsContainer,
  StyledStatsListItems,
  StyledStatKey,
} from "@/styles";

export default function CurrentPetStats({ selectedPet }) {
  return (
    <StyledStatsContainer>
      <StyledStatsListItems>
        <StyledStatKey>Name</StyledStatKey>
        <br />
        {selectedPet.name}
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Type</StyledStatKey>
        <br /> {selectedPet.type}
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Health</StyledStatKey>
        <br /> {selectedPet.health}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Happiness</StyledStatKey>
        <br />
        {selectedPet.happiness}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Satiety</StyledStatKey>
        <br />
        {selectedPet.satiety}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Energy</StyledStatKey>
        <br />
        {selectedPet.energy}/100
      </StyledStatsListItems>
    </StyledStatsContainer>
  );
}
