import pets from "@/lib/pets";
import StyledList from "@/components/Styles/StyledList";
import StyledListItem from "@/components/Styles/StyledListItem";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "@/components/SVGIcon";

export default function PetList({ onSelectPet, selectedPet }) {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem
              $selected={selectedPet.id === pet.id}
              key={pet.id}
              $variant="select"
            >
              <PositionedButton
                $variant="highlight"
                position="static"
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                <SVGIcon variant={pet.type} size={100} ariaLabel={pet.type} />
              </PositionedButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
