import styled from "styled-components";

export default function PetInfo({ label, value }) {
  return (
    <>
      <Container>
        <LabelWrapper>{label}</LabelWrapper>
        <ValueWrapper>{value}</ValueWrapper>
      </Container>
    </>
  );
}
const LabelWrapper = styled.div`
  width: 45px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #add8e6;
  margin-right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ValueWrapper = styled.div`
  @media (max-width: 600px) {
    max-width: 100px;
  }
  width: 145px;
  height: 35px;
  padding-left: 7px;
  background-color: lightgrey;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
