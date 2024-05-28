import PetList from "@/components/PetList";
import { StyledHeading } from "@/styles";

export default function HomePage() {
  return (
    <>
      <StyledHeading>Select a Survival Pet</StyledHeading>
      <PetList />
    </>
  );
}
