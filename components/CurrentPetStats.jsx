import StyledStatsContainer from "@/components/Styles/StyledStatsContainer";
import StyledListItem from "@/components/Styles/StyledListItem";
import StyledDiv from "@/components/Styles/StyledDiv";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "./SVGIcon";
import StatBar from "@/components/StatBar";
import PetInfo from "./PetInfo";

export default function CurrentPetStats({ selectedPet, onMode, isDead }) {
  return (
    <StyledDiv>
      <StyledStatsContainer>
        <StyledListItem $variant="livingroom">
          <PetInfo label={"Name"} value={selectedPet.name} />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"#7CFC00"}
            value={selectedPet.satiety}
            icon={"food"}
          />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <PetInfo label={"Type"} value={selectedPet.type} />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"#40E0D0"}
            value={selectedPet.energy}
            icon={"thunder"}
          />
        </StyledListItem>
        <StyledListItem $variant="livingroom">
          <StatBar
            color={"#228B22"}
            value={selectedPet.health}
            icon={"heart"}
          />
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
