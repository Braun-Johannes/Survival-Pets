import StyledStatKey from "@/components/Styles/StyledStatKey";
import StyledStatsContainer from "@/components/Styles/StyledStatsContainer";
import StyledListItem from "@/components/Styles/StyledListItem";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import PositionedDiv from "@/components/Styles/PositionedDiv";

export default function CurrentPetStats({ selectedPet, onMode, isDead }) {
  return (
    <PositionedDiv>
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
          onClick={() => onMode("edit")}
          hidden={isDead}
        >
          Edit
        </PositionedButton>
        <PositionedButton
          $variant="cancel"
          top="60px"
          right="10px"
          onClick={() => onMode("eliminate")}
          hidden={isDead}
        >
          Eliminate
        </PositionedButton>
      </StyledDiv>
    </PositionedDiv>
  );
}
