import StyledHeading from "@/components/Styles/StyledHeading";
import StyledLink from "@/components/Styles/StyledLink";
import useSWR from "swr";
import { formatPetsAge } from "@/utils";
import PNGImage from "@/components/PNGImage";
import styled from "styled-components";

export default function HallOfFame() {
  const { data, isLoading } = useSWR("/api/pets");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  function sortedDeceasedPets(data) {
    let arrayCopy = [...data];
    arrayCopy.sort(
      (a, b) => b.lastUpdated - b.createdAt - (a.lastUpdated - a.createdAt)
    );
    return arrayCopy.slice(0, 100);
  }

  const top100 = sortedDeceasedPets(data);
  const top100Index = top100.map((item, index) => ({
    ...item,
    originalIndex: index,
  }));

  return (
    <StyledBackground>
      <div>
        <StyledLink href={"/"}> ←</StyledLink>
        <StyledHeading>Hall of Fame</StyledHeading>
      </div>
      <StyledList>
        {top100Index.map((pet) => (
          <StyledListItems key={pet._id}>
            <p></p>
            <StyledName>
              #{pet.originalIndex + 1} {pet.name}
            </StyledName>
            <PNGImage variant={pet.type} size={200} ariaLabel={pet.type} />
            <StyledContainer>
              <StyledP>Time Alive:</StyledP>
              <StyledP>
                {formatPetsAge(Math.floor(pet.lastUpdated - pet.createdAt))}
              </StyledP>
            </StyledContainer>
          </StyledListItems>
        ))}
      </StyledList>
    </StyledBackground>
  );
}

const StyledListItems = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.89);
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const StyledName = styled.p`
  font-size: 2.5rem;
`;

const StyledBackground = styled.div`
  background-image: url("/Images/HallOfFame.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: auto;
  border: 4px solid transparent;
`;
