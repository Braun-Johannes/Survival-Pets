import PetList from "@/components/PetList";
import StyledHeading from "@/components/Styles/StyledHeading";
import PetForm from "@/components/PetForm";
import CurrentPet from "@/components/CurrentPet";
import CurrentPetStats from "@/components/CurrentPetStats";
import EditForm from "@/components/EditForm";
import EliminateForm from "@/components/EliminateForm";
import TombstoneButton from "@/components/TombstoneButton";
import StyledDiv from "@/components/Styles/StyledDiv";
import styled from "styled-components";
import Link from "next/link";
import InteractionMenu from "@/components/InteractionMenu";
import { formatPetsAge } from "@/utils";
import SVGIcon from "@/components/SVGIcon";

export default function HomePage({
  selectedPet,
  mode,
  isDead,
  onSelectPet,
  onSubmit,
  onIncreaseStats,
  onEliminate,
  onMode,
  onDeletePet,
  ageInSeconds,
  onAddSnackbar,
  timeAlive,
}) {
  return (
    <>
      {mode === "select" && (
        <>
          <StyledModeBackground $backgroundImage="/Images/Dump2.png">
            <StyledGrid>
              <StyledHeading $variant="select">
                Select a Survival Pet
              </StyledHeading>
              <StyledDiv>
                <PetList onSelectPet={onSelectPet} selectedPet={selectedPet} />
              </StyledDiv>
              <PetForm
                selectedPet={selectedPet}
                onSubmit={onSubmit}
                onAddSnackbar={onAddSnackbar}
              />
            </StyledGrid>
          </StyledModeBackground>
        </>
      )}

      {mode === "livingroom" && (
        <>
          <StyledModeBackground $backgroundImage="/Images/Forrest4.png">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Home</StyledHeading>
                {!isDead && (
                  <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
                )}
              </div>

              {!isDead ? (
                <StyledContainer>
                  <StyledButtonContainer>
                    <StyledLink $variant="graveyard" href={"/graveyard"}>
                      <SVGIcon variant="graveyard" size={40} />
                    </StyledLink>
                    <StyledLink $variant="hallOfFame" href={"/HallOfFame"}>
                      <SVGIcon variant="hallOfFame" size={40} />
                    </StyledLink>
                  </StyledButtonContainer>
                  <StyledDiv>
                    <CurrentPet selectedPet={selectedPet} />
                  </StyledDiv>
                  <InteractionMenu onIncreaseStats={onIncreaseStats} />
                </StyledContainer>
              ) : (
                <StyledContainer>
                  <StyledButtonContainer>
                    <StyledLink $variant="graveyard" href={"/graveyard"}>
                      <SVGIcon variant="graveyard" size={40} />
                    </StyledLink>
                    <StyledLink $variant="hallOfFame" href={"/HallOfFame"}>
                      <SVGIcon variant="hallOfFame" size={40}></SVGIcon>
                    </StyledLink>
                  </StyledButtonContainer>
                  <StyledDiv>
                    <TombstoneButton
                      selectedPet={selectedPet}
                      timeAlive={timeAlive}
                      onMode={onMode}
                      onDeletePet={onDeletePet}
                    />
                  </StyledDiv>
                </StyledContainer>
              )}
              <CurrentPetStats
                isDead={isDead}
                selectedPet={selectedPet}
                onMode={onMode}
              />
            </StyledGrid>
          </StyledModeBackground>
        </>
      )}

      {mode === "edit" && (
        <>
          <StyledModeBackground $backgroundImage="/Images/Forrest4.png">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Living Room</StyledHeading>
                <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
              </div>
              <StyledContainer>
                <div></div> {/* Placeholder for positioning */}
                <StyledDiv>
                  <CurrentPet selectedPet={selectedPet} />
                </StyledDiv>
              </StyledContainer>
              <EditForm
                selectedPet={selectedPet}
                onSubmit={onSubmit}
                onMode={onMode}
                onAddSnackbar={onAddSnackbar}
              />
            </StyledGrid>
          </StyledModeBackground>
        </>
      )}

      {mode === "eliminate" && (
        <>
          <StyledModeBackground $backgroundImage="/Images/Forrest4.png">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Living Room</StyledHeading>
                <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
              </div>
              <StyledContainer>
                <div></div> {/* Placeholder for positioning */}
                <StyledDiv>
                  <CurrentPet selectedPet={selectedPet} />
                </StyledDiv>
              </StyledContainer>
              <EliminateForm
                selectedPet={selectedPet}
                onMode={onMode}
                onEliminate={onEliminate}
              />
            </StyledGrid>
          </StyledModeBackground>
        </>
      )}
    </>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% auto 30%;
  height: calc(100vh - 1rem);
`;
const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  min-height: 400px;
`;

const StyledH2 = styled.h2`
  text-align: end;
  margin-right: 20px;
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 2px black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: flex;
  padding: 5px;
  text-align: center;
  border-radius: 40%;
  border: 2px black solid;
  margin-left: 30%;
  box-shadow: 2px 2px 2px black;
  min-width: 70px;

  ${(props) =>
    props.$variant === "graveyard" &&
    `
    background-color: lightgrey;
  `}
  ${(props) =>
    props.$variant === "hallOfFame" &&
    `
    background-color: lightgreen;
  `}
`;

const StyledModeBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${(props) => props.$backgroundImage});
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
