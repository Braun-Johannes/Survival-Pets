import { useRouter } from "next/router";

export default function PetsDetail({ deceasedPets }) {
  const router = useRouter();
  const { id } = router.query;

  const detailsPet = deceasedPets.find((pet) => pet.id === id);

  return <></>;
}
