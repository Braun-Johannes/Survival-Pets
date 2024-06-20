import styled from "styled-components";
import SVGIcon from "./SVGIcon";

export default function StatBar({ icon, value, color }) {
  return (
    <>
      <Container>
        <IconWrapper>
          <SVGIcon variant={icon} size={30} />
        </IconWrapper>
        <BarContainer>
          <ParameterBar color={color} value={value} />
        </BarContainer>
      </Container>
    </>
  );
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #add8e6;
  margin-right: -15px;
  z-index: 1;
`;

const BarContainer = styled.div`
  @media (max-width: 600px) {
    width: 105px;
  }
  width: 150px;
  height: 35px;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const ParameterBar = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${({ color }) => color};
  transition: width 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
