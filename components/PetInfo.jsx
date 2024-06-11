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
  background-color: lightsteelblue;
  margin-right: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ValueWrapper = styled.div`
  width: 145px;
  height: 35px;
  background-color: lightgrey;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
