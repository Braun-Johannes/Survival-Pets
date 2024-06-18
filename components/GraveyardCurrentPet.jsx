import styled from "styled-components";
import StatBar from "./StatBar";
import { formatPetsAge } from "@/utils";

export default function GraveyardCurrentPetCard({ selectedPet, ageInSeconds }) {
  return (
    <StyledSection>
      <StyledLabel>Current Pet</StyledLabel>
      <CurrentPetContainer>
        <StyledP>Name:</StyledP> <StyledP>{selectedPet.name}</StyledP>
        <StyledP>Time Alive:</StyledP>{" "}
        <StyledP>{formatPetsAge(ageInSeconds)}</StyledP>
        <StyledP>Health:</StyledP>{" "}
        <StatBar color={"#FF7F7F"} value={selectedPet.health} icon={"heart"} />
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
  padding-left: 5rem;
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
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 1px;
  margin-right: 1px;
`;
