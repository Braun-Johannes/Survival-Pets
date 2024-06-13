import styled from "styled-components";
import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "./SVGIcon";
import { formatPetsAge } from "@/utils";

export default function TombstoneButton({
  selectedPet,
  onDeletePet,
  timeAlive,
}) {
  return (
    <>
      <StyledTombstone>
        <UpperTombstone></UpperTombstone>
        <LowerTombstone>
          <Name>
            <p>
              R.I.P.
              <br />
              <br />
              {selectedPet.name}
            </p>
            <p>
              Time alive:
              <br />
              {formatPetsAge(timeAlive)}
            </p>
          </Name>
          <br />
          <br />
          <PositionedButton
            onClick={onDeletePet}
            $variant="tombstone"
            position="relative"
          >
            <p>
              Press here
              <br />
              <br />
              <SVGIcon variant="sloth" />
              <SVGIcon variant="cheetah" />
              <SVGIcon variant="racoon" />
              <SVGIcon variant="dragon" />
              <br />
              <br />
              to create a new survival pet
            </p>
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
  bottom: 150px;
  left: calc(50% - 100px);
`;

const UpperTombstone = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 90px;
  background: grey;
  margin: 0 auto;
  position: relative;
  top: 65px;
  z-index: -10;
  font-size: 1rem;
  box-shadow: 1px 1px 1px #000000;
`;

const LowerTombstone = styled.div`
  width: 250px;
  background: grey;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
  position: relative;
  font-size: 1rem;
  padding: 5px 0 95px 0px;
  box-shadow: 1px 1px 1px #000000;
`;

const Name = styled.div`
  border: 2px solid black;
  display: inline-block;
  padding: 3px 50px;
  margin-top: 20px;
  overflow: hidden;
  color: black;
  box-shadow: 1px 1px 1px #d0d2e8;
`;
