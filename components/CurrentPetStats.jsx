import StyledStatsContainer from "@/components/Styles/StyledStatsContainer";
import StyledListItem from "@/components/Styles/StyledListItem";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "@/components/SVGIcon";
import StatBar from "@/components/StatBar";
import PetInfo from "./PetInfo";
import styled from "styled-components";

export default function CurrentPetStats({ selectedPet, onMode, isDead }) {
  return (
    <StyledStatsContainer>
      <div>
        <CurrentPetContainer>
          <StyledListItem $variant="livingroom">
            <PetInfo label={"Name"} value={selectedPet.name} />
          </StyledListItem>
          <StyledListItem $variant="livingroom">
            <StatBar
              color={"#fce671"}
              value={selectedPet.satiety}
              icon={"food"}
            />
          </StyledListItem>
        </CurrentPetContainer>
        <CurrentPetContainer>
          <StyledListItem $variant="livingroom">
            <PetInfo label={"Type"} value={selectedPet.type} />
          </StyledListItem>
          <StyledListItem $variant="livingroom">
            <StatBar
              color={"#ffb628"}
              value={selectedPet.energy}
              icon={"thunder"}
            />
          </StyledListItem>
        </CurrentPetContainer>
        <CurrentPetContainer>
          <StyledListItem $variant="livingroom">
            <StatBar
              color={"#ff2e2e"}
              value={selectedPet.health}
              icon={"heart"}
            />
          </StyledListItem>
          <StyledListItem $variant="livingroom">
            <StatBar
              color={"#ff8660"}
              value={selectedPet.happiness}
              icon={"smiley"}
            />
          </StyledListItem>
        </CurrentPetContainer>
      </div>
      <StatButtons>
        <PositionedButton
          $position="relative"
          $variant="edit"
          onClick={() => onMode("edit")}
          hidden={isDead}
        >
          <SVGIcon variant="pen" size={25} ariaLabel="edit" />
        </PositionedButton>
        <PositionedButton
          $position="relative"
          $variant="eliminate"
          onClick={() => onMode("eliminate")}
          hidden={isDead}
        >
          <SVGIcon variant="dead" size={25} ariaLabel="eliminate" />
        </PositionedButton>
      </StatButtons>
    </StyledStatsContainer>
  );
}

const CurrentPetContainer = styled.div`
  display: flex;
  @media (max-width: 500px) {
    margin-left: -40px;
    justify-content: space-around;
  }
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

const StatButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
