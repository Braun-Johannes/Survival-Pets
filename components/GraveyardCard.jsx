import { formatPetsAge } from "@/utils";
import SVGIcon from "./SVGIcon";
import styled from "styled-components";

export default function GraveyardCard({ deceasedPet }) {
  return (
    <CardContainer>
      {deceasedPet.name}
      <br />
      <SVGIcon variant={deceasedPet.type} ariaLabel={deceasedPet.type} /> <br />
      Time Alive: <br />{" "}
      {formatPetsAge(
        Math.floor(deceasedPet.lastUpdated - deceasedPet.createdAt)
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 9rem;
  background: rgba(255, 255, 255, 0.8);
`;
