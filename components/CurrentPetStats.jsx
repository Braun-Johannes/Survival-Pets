import StyledStatKey from "@/components/Styles/StyledStatKey";
import StyledStatsContainer from "@/components/Styles/StyledStatsContainer";
import StyledListItem from "@/components/Styles/StyledListItem";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "./SVGIcon";
import StatBar from "@/components/StatBar";

export default function CurrentPetStats({ selectedPet, onMode, isDead }) {
  return (
    <StyledDiv>
      <StyledStatsContainer>
        <StyledListItem $variant="livingroom">
          <span>Name</span>
          <br />
          <StyledStatKey $variant="icon">{selectedPet.name}</StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"lightgreen"}
            value={selectedPet.satiety}
            icon={"food"}
          />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <span>Type</span>
          <br />
          <StyledStatKey $variant="icon">{selectedPet.type}</StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"lightblue"}
            value={selectedPet.energy}
            icon={"thunder"}
          />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar color={"green"} value={selectedPet.health} icon={"health"} />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"orange"}
            value={selectedPet.happiness}
            icon={"smiley"}
          />
        </StyledListItem>
      </StyledStatsContainer>

      <PositionedButton
        $variant="edit"
        top="10px"
        right="10px"
        onClick={() => onMode("edit")}
        hidden={isDead}
      >
        <SVGIcon variant="pen" size={20} ariaLabel="edit" />
      </PositionedButton>
      <PositionedButton
        $variant="cancel"
        top="60px"
        right="10px"
        onClick={() => onMode("eliminate")}
        hidden={isDead}
      >
        <SVGIcon variant="dead" size={25} ariaLabel="eliminate" />
      </PositionedButton>
    </StyledDiv>
  );
}
