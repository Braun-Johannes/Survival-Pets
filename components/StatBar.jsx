import styled from "styled-components";
import SVGIcon from "./SVGIcon";

export default function StatBar({ icon, value, color, maxValue = 100 }) {
  return (
    <Container>
      <IconWrapper>
        <SVGIcon variant={icon} size={30} color="white" />
      </IconWrapper>
      <BarContainer>
        <ParameterBar
          $variant="livingroom"
          color={color}
          value={value}
          maxValue={maxValue}
        />
      </BarContainer>
    </Container>
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
  background-color: #424242;
  margin-right: -15px;
  z-index: 1;
`;

const BarContainer = styled.div`
  width: 150px;
  height: 35px;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 105px;
  }
`;

const ParameterBar = styled.div`
  width: ${({ value, maxValue }) => (value / maxValue) * 100}%;
  height: 100%;
  background-color: ${({ color }) => color};
  transition: width 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
