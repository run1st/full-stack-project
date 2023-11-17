import styled from "@emotion/styled";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(1, 200px);

  padding: 10px;
  justify-content: center;
  text-align: center;
  grid-gap: 20px;
  magin-bottom: 20px;
`;
const GridElement = styled.div`
  background-color: #12e4ab;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin: 10px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;
const NumberValue = styled.label`
  font-size: 40px;
  font-weight: bold;
`;
const TitleValue = styled.label`
  font-size: 40px;
`;
const CircleGenreWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 220px 220px 220px 220px;
  justify-content: center;
  grid-gap: 20px;
`;
const CircleContainer = styled.div`
  background-color: #2fa1a3;
  border-radius: 25%;

  text-align: center;
`;
const GenerLabel = styled.label`
  font-size: 40px;
`;
const Circle = styled.div`
  position: relative;
  top: 5px;
  left: 5px;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #ffffff;
`;
const CircleBorder = styled.div`
  position: relative;
  text-align: center;
  width: 110px;
  height: 110px;
  margin-left: 30px;
  margin-top: 30px;
  border-radius: 100%;
  background-color: #e53b3b;
  background-image: linear-gradient(162deg, transparent 50%, #f0f0f0 50%),
    linear-gradient(90deg, #f0f0f0 50%, transparent 50%);
`;
const Home: React.FC = () => (
  <div>
    <GridWrapper>
      <GridElement>
        <NumberValue>10</NumberValue>
        <TitleValue>fff</TitleValue>
      </GridElement>
      <GridElement>
        <NumberValue>10</NumberValue>
        <TitleValue></TitleValue>fff
      </GridElement>
      <GridElement>
        <NumberValue>10</NumberValue>
        <TitleValue></TitleValue>fff
      </GridElement>
      <GridElement>
        <NumberValue>10</NumberValue>
        <TitleValue></TitleValue>fff
      </GridElement>
    </GridWrapper>
    <CircleGenreWrapper>
      {" "}
      <CircleContainer>
        <CircleBorder>
          <Circle></Circle>
        </CircleBorder>
        <GenerLabel>Label</GenerLabel>
      </CircleContainer>
      <CircleContainer>
        {" "}
        <CircleBorder>
          <Circle></Circle>
        </CircleBorder>
        <GenerLabel>Label</GenerLabel>
      </CircleContainer>
      <CircleContainer>
        {" "}
        <CircleBorder>
          <Circle></Circle>
        </CircleBorder>
        <GenerLabel>Label</GenerLabel>
      </CircleContainer>
      <CircleContainer>
        <CircleBorder>
          <Circle></Circle>
        </CircleBorder>
        <GenerLabel>Label</GenerLabel>
      </CircleContainer>
    </CircleGenreWrapper>
  </div>
);
export default Home;
