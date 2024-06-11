import styled from "styled-components";
import SVGIcon from "./SVGIcon";

export default function StatBar({ icon, value, color }) {
  return (
    <>
      <Container>
        <IconWrapper>
          <SVGIcon variant={icon} size={30} ariaLabel="satiety" />
        </IconWrapper>
        <BarContainer>
          <ParameterBar color={color} value={value} />
        </BarContainer>
      </Container>
    </>
  );
}

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightsteelblue;
  margin-right: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const BarContainer = styled.div`
  width: 150px;
  height: 35px;
  background-color: lightgray;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
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
