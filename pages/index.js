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
          <StyledModeBackground $variant="select">
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
          <StyledModeBackground $variant="livingroom">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Living Room</StyledHeading>
                {!isDead && (
                  <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
                )}
              </div>
              {!isDead ? (
                <StyledContainer>
                  <div>
                    <StyledLink href={"/graveyard"}>
                      <SVGIcon variant="graveyard" />
                    </StyledLink>
                  </div>
                  <StyledDiv>
                    <CurrentPet selectedPet={selectedPet} />
                  </StyledDiv>
                  <InteractionMenu onIncreaseStats={onIncreaseStats} />
                </StyledContainer>
              ) : (
                <StyledDiv>
                  <TombstoneButton
                    selectedPet={selectedPet}
                    timeAlive={timeAlive}
                    onMode={onMode}
                    onDeletePet={onDeletePet}
                  />
                </StyledDiv>
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
          <StyledModeBackground $variant="livingroom">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Living Room</StyledHeading>
                <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
              </div>
              <StyledDiv>
                <CurrentPet selectedPet={selectedPet} />
              </StyledDiv>
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
          <StyledModeBackground $variant="livingroom">
            <StyledGrid>
              <div>
                <StyledHeading $variant="livingroom">Living Room</StyledHeading>
                <StyledH2>Time Alive: {formatPetsAge(ageInSeconds)}</StyledH2>
              </div>
              <StyledDiv>
                <CurrentPet selectedPet={selectedPet} />
              </StyledDiv>
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  align-items: flex;
  padding: 5px;
  border-radius: 40%;
  border-right: 3px black solid;
  border-left: 3px black solid;
  border-bottom: 3px black solid;
  margin-left: 30%;
  background-color: lightgrey;
`;

const StyledModeBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  ${(props) =>
    props.$variant === "select" &&
    `
    background-image: url("/Images/Dump2.png")
  `}
  ${(props) =>
    props.$variant === "livingroom" &&
    `
  background-image: url("/Images/Forrest4.png")`}
`;
