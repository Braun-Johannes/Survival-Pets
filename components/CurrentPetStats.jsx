import {
  StyledStatsContainer,
  StyledStatsListItems,
  StyledStatKey,
} from "@/styles";

export default function CurrentPetStats({ currentPet }) {
  return (
    <StyledStatsContainer>
      <StyledStatsListItems>
        <StyledStatKey>Name</StyledStatKey>
        <br />
        {currentPet.name}
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Type</StyledStatKey>
        <br /> {currentPet.type}
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Health</StyledStatKey>
        <br /> {currentPet.health}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Happiness</StyledStatKey>
        <br />
        {currentPet.happiness}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Satiety</StyledStatKey>
        <br />
        {currentPet.satiety}/100
      </StyledStatsListItems>
      <StyledStatsListItems>
        <StyledStatKey>Energy</StyledStatKey>
        <br />
        {currentPet.energy}/100
      </StyledStatsListItems>
    </StyledStatsContainer>
  );
}
