import StyledStatKey from "./Styles/StyledStatKey";
import StyledStatsContainer from "./Styles/StyledStatsContainer";
import StyledListItem from "./Styles/StyledListItem";
import StyledDiv from "./Styles/StyledDiv";
import PositionedButton from "./Styles/StyledButton";

export default function CurrentPetStats({ selectedPet, handleMode }) {
  return (
    <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
      <StyledDiv>
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
        <PositionedButton
          $variant="edit"
          top="10px"
          right="10px"
          onClick={() => handleMode("edit")}
        >
          Edit
        </PositionedButton>
      </StyledDiv>
    </div>
  );
}
