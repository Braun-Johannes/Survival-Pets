import styled from "styled-components";
import StatBar from "./StatBar";
import { formatPetsAge } from "@/utils";

export default function GraveyardCurrentPetCard({ selectedPet, ageInSeconds }) {
  return (
    <StyledSection>
      <StyledLabel>Current Pet</StyledLabel>
      <CurrentPetContainer>
        <StyledP>Name:</StyledP> <StyledP>{selectedPet.name}</StyledP>{" "}
      </CurrentPetContainer>
      <CurrentPetContainer>
        <StyledP>Time Alive:</StyledP>{" "}
        <StyledP>{formatPetsAge(ageInSeconds)}</StyledP>
      </CurrentPetContainer>
      <CurrentPetContainer>
        <StyledP>Health:</StyledP>{" "}
        <StatBar color={"#ff2e2e"} value={selectedPet.health} icon={"heart"} />
      </CurrentPetContainer>
    </StyledSection>
  );
}

const StyledLabel = styled.label`
  position: relative;
  font-size: 2rem;
  left: 10px;
  text-decoration: underline;
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  min-width: 170px;
`;

const StyledSection = styled.section`
  width: 100vw;
  background: white;
  border: 3px solid black;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
`;

const CurrentPetContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
