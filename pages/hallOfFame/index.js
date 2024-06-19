import StyledHeading from "@/components/Styles/StyledHeading";
import StyledLink from "@/components/Styles/StyledLink";
import useSWR from "swr";

export default function HallOfFame() {
  const { data, isLoading } = useSWR("/api/pets");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  //   console.log(data);

  return (
    <>
      <div>
        <StyledLink href={"/"}> ←</StyledLink>
        <StyledHeading>Hall of Fame</StyledHeading>
      </div>
      <ul>
        {data.map((pet) => (
          <li key={pet._id}>{pet.name}</li>
        ))}
      </ul>
    </>
  );
}
