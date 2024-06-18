import { useRouter } from "next/router";

export default function PetsDetail({ deceasedPets }) {
  const router = useRouter();
  const { id } = router.query;

  const detailsPet = deceasedPets.find((pet) => pet.id === id);

  if (!detailsPet) {
    return <div>...loading</div>;
  }

  return (
    <>
      <p>{detailsPet.name}</p>
      <p></p>
    </>
  );
}
