import pets from "@/lib/pets";
import { StyledList, StyledListItem, ListButton } from "@/styles";
import { useState } from "react";

export default function PetList({ onSelectPet, selectedPet }) {
  return (
    <>
      <StyledList>
        {pets.map((pet) => {
          return (
            <StyledListItem
              style={{ border: selectedPet === pet ? "2px solid orange" : "" }}
              key={pet.id}
            >
              <ListButton
                onClick={() => {
                  onSelectPet(pet);
                }}
              >
                {pet.name}
              </ListButton>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
