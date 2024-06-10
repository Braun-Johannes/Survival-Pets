import StyledStatKey from "@/components/Styles/StyledStatKey";
import StyledStatsContainer from "@/components/Styles/StyledStatsContainer";
import StyledListItem from "@/components/Styles/StyledListItem";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "./SVGIcon";

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
          <SVGIcon variant="food" size={20} />
          <br />
          <StyledStatKey $variant="icon">
            {selectedPet.satiety}/100
          </StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <span>Type</span>
          <br />
          <StyledStatKey $variant="icon">{selectedPet.type}</StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <SVGIcon variant="thunder" size={20} />
          <br />
          <StyledStatKey $variant="icon">
            {selectedPet.energy}/100
          </StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <SVGIcon variant="health" size={20} />
          <br />
          <StyledStatKey $variant="icon">
            {selectedPet.health}/100
          </StyledStatKey>
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <SVGIcon variant="smiley" size={20} />
          <br />
          <StyledStatKey $variant="icon">
            {selectedPet.happiness}/100
          </StyledStatKey>
        </StyledListItem>
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
  );
}
