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

  return (
    <>
      <div>
        <StyledLink href={"/"}> ←</StyledLink>
        <StyledHeading>Hall of Fame</StyledHeading>
      </div>
      <StyledList>
        {data.map((pet) => (
          <StyledListItems key={pet._id}>
            {pet.name}
            <PNGImage variant={pet.type} size={50} ariaLabel={pet.type} />
            {formatPetsAge(Math.floor(pet.lastUpdated - pet.createdAt))}
          </StyledListItems>
        ))}
      </StyledList>
    </>
  );
}

const StyledListItems = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background: white;
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
