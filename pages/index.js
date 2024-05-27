import pets from "@/pets";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  align-items: center;
  margin: 0;
  height: 50vh;
`;

const StyledListItem = styled.li`
  border: 2px black solid;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeading>Select a Survival Pet</StyledHeading>
      <StyledList>
        {pets.map((pet) => {
          return <StyledListItem key={pet.id}>{pet.name}</StyledListItem>;
        })}
      </StyledList>
    </>
  );
}
