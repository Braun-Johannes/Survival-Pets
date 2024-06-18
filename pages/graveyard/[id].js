import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";

export default function PetsDetail({ deceasedPets }) {
  const router = useRouter();
  const { id } = router.query;

  const detailsPet = deceasedPets.find((pet) => pet.id === id);

  if (!detailsPet) {
    return <div>...loading</div>;
  }

  return (
    <>
      <h1>{detailsPet.name}</h1>
      <br />
      <SVGIcon variant={detailsPet.type} size={100} ariaLabel={pet.type} />
      <br />
      <p>{detailsPet.name}</p>
      <br />
      <p>{detailsPet.name}</p>
      <br />
      <p>{detailsPet.birthday}</p>
      <br />
      <p>{detailsPet.deathDate}</p>
    </>
  );
}
