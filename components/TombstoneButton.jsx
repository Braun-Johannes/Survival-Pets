import styled from "styled-components";
import PositionedButton from "@/components/Styles/StyledButton";
import PNGImage from "@/components/PNGImage";
import { formatPetsAge } from "@/utils";
import useSWR from "swr";

export default function TombstoneButton({
  selectedPet,
  onDeletePet,
  timeAlive,
}) {
  const { mutate } = useSWR("/api/pets");

  async function handlePetsData() {
    const response = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify(selectedPet),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <StyledTombstone>
        <UpperTombstone></UpperTombstone>
        <LowerTombstone>
          <Name>
            <p>
              R.I.P.
              <br />
              {selectedPet.name}
            </p>
            <p>
              Time alive:
              <br />
              {formatPetsAge(timeAlive)}
            </p>
          </Name>
          <PositionedButton
            onClick={() => {
              onDeletePet();
              handlePetsData();
            }}
            $variant="tombstone"
            $position="relative"
          >
            Press here
            <br />
            <PNGImage variant={selectedPet.type} ariaLabel={selectedPet.type} />
            <br />
            to create a new survival pet
          </PositionedButton>
        </LowerTombstone>
      </StyledTombstone>
    </>
  );
}
const StyledTombstone = styled.div`
  display: inline-block;
  text-align: center;
  font-size: 0;
  margin-top: -80px;
  @media (max-width: 500px) {
    margin-top: -70px;
  }
`;

const UpperTombstone = styled.div`
  border-radius: 50%;
  width: 200px;
  @media (max-width: 500px) {
    width: 150px;
  }
  height: 90px;
  background: grey;
  margin: 0 auto;
  position: relative;
  top: 65px;
`;

const LowerTombstone = styled.div`
  width: 250px;
  @media (max-width: 500px) {
    width: 200px;
    padding: 5px 0px 30px 0px;
  }
  background: grey;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
  position: relative;
  font-size: 1rem;
  padding: 5px 0px 50px 0px;
  box-shadow: 1px 1px 1px #000000;
`;

const Name = styled.div`
  border: 2px solid black;
  display: inline-block;
  padding: 3px 50px;
  @media (max-width: 500px) {
    padding: 3px 25px;
  }
  margin-top: 20px;
  overflow: hidden;
  color: black;
  box-shadow: 1px 1px 1px #d0d2e8;
`;
