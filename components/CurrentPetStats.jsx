import StyledStatKey from "./Styles/StyledStatKey";
import StyledStatsContainer from "./Styles/StyledStatsContainer";
import StyledListItem from "./Styles/StyledListItem";
import StyledButton from "./Styles/StyledButton";
import StyledDiv from "./Styles/StyledDiv";

export default function CurrentPetStats({ selectedPet, onHandleMode }) {
  return (
    <StyledDiv $variant="livingroom">
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
        <StyledListItem></StyledListItem>
      </StyledStatsContainer>
      <StyledButton $variant="edit" onClick={() => onHandleMode("edit")}>
        Edit
      </StyledButton>
    </StyledDiv>
  );
}
