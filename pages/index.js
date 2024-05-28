import PetList from "@/components/PetList";
import { StyledHeading } from "@/styles";
import PetForm from "@/components/PetForm";

export default function HomePage() {
  return (
    <>
      <StyledHeading>Select a Survival Pet</StyledHeading>
      <PetList />
      <PetForm />
    </>
  );
}
