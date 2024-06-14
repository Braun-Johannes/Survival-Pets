import styled from "styled-components";
import StatBar from "./StatBar";
import { formatPetsAge } from "@/utils";

export default function GraveyardCurrentPetCard({ selectedPet, ageInSeconds }) {
  return (
    <section>
      <CurrentPetContainer>
        <StyledLabel>Current Pet:</StyledLabel>
        <StyledP>Name:</StyledP> <StyledP>{selectedPet.name}</StyledP>
        <StyledP>Time Alive:</StyledP>{" "}
        <StyledP>{formatPetsAge(ageInSeconds)}</StyledP>
        <StyledP>Health:</StyledP>{" "}
        <StatBar color={"#FF7F7F"} value={selectedPet.health} icon={"heart"} />
      </CurrentPetContainer>
    </section>
  );
}

const StyledLabel = styled.label`
  position: absolute;
  font-size: 2rem;
  left: 0;
  top: -40px;
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  padding-left: 5rem;
`;

const CurrentPetContainer = styled.div`
  display: grid;
  position: fixed;
  bottom: 0;
  background: white;
  grid-template-columns: auto auto;
  border: 3px solid black;
  border-radius: 10px;
  width: 100vw;
  margin-left: 1px;
  margin-right: 1px;
`;
