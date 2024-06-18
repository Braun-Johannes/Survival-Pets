import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";
import { formatPetsAge } from "@/utils";
import StyledLink from "@/components/Styles/StyledLink";

export default function PetsDetail({ deceasedPets }) {
  const router = useRouter();
  const { id } = router.query;

  const detailsPet = deceasedPets.find((pet) => pet.id === id);

  if (!detailsPet) {
    return <div>...loading</div>;
  }

  return (
    <>
      <StyledLink href={"/graveyard"}> ←</StyledLink>
      <h1>{detailsPet.name}</h1>
      <br />
      <SVGIcon
        variant={detailsPet.type}
        size={100}
        ariaLabel={detailsPet.type}
      />
      <br />
      <p>Name: {detailsPet.name}</p>
      <br />
      <p>
        Time Alive:{" "}
        {formatPetsAge(
          Math.floor(detailsPet.lastUpdated - detailsPet.createdAt)
        )}
      </p>
      <br />
      <p>Creation Date: {detailsPet.birthday}</p>
      <br />
      <p>Death Date: {detailsPet.deathDate}</p>
    </>
  );
}
