import StyledHeading from "@/components/Styles/StyledHeading";
import StyledLink from "@/components/Styles/StyledLink";
import useSWR from "swr";
import { formatPetsAge } from "@/utils";
import PNGImage from "@/components/PNGImage";

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
      <ul>
        {data.map((pet) => (
          <li key={pet._id}>
            <PNGImage variant={pet.type} size={50} ariaLabel={pet.type} />
            {pet.name}{" "}
            {formatPetsAge(Math.floor(pet.lastUpdated - pet.createdAt))}
          </li>
        ))}
      </ul>
    </>
  );
}
