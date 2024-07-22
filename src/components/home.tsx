import styled from "@emotion/styled";
// const ContainerDiv = styled.div`
// background-image: url(https://adminlte.io/wp-content/uploads/2021/04/hero-bg.jpg);
// }
//   font-family: Mulish, sans-serif;
// }`;
const ContainerDiv = styled.div`
  background-image: url(https://adminlte.io/wp-content/uploads/2021/04/hero-bg.jpg);
  font-family: Mulish, sans-serif;
  display: flex; /* Add display: flex */

  height: 100vh; /* Set height to 100vh for full viewport height */
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 10px;
  margin-bottom: 20px;
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
  justify-content: center;
  align-items: center;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 10px;
`;
const CircleContainer = styled.div`
  background-color: #2fa1a3;
  border-radius: 5%;

  text-align: center;
  padding: 20px;
`;
const GenerLabel = styled.label`
  font-size: 30px;
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 auto;
`;
const CircleBorder = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #e53b3b;
  background-image: linear-gradient(162deg, transparent 50%, #f0f0f0 50%),
    linear-gradient(90deg, #f0f0f0 50%, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const Sidebar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 1rem;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;
const Home: React.FC = () => (
  <div>
    <ContainerDiv>
      <Sidebar>
        <p>hello you know what i am doing i am doing side bar</p>
      </Sidebar>
      <MainContent>
        <GridWrapper>
          <GridElement>
            <NumberValue>10</NumberValue>
            <TitleValue>Songs</TitleValue>
          </GridElement>
          <GridElement>
            <NumberValue>10</NumberValue>
            <TitleValue></TitleValue>Artists
          </GridElement>
          <GridElement>
            <NumberValue>10</NumberValue>
            <TitleValue></TitleValue>Albums
          </GridElement>
          <GridElement>
            <NumberValue>10</NumberValue>
            <TitleValue></TitleValue>Genres
          </GridElement>
        </GridWrapper>

        <CircleGenreWrapper>
          {" "}
          <CircleContainer>
            <CircleBorder>
              <Circle></Circle>
            </CircleBorder>
            <GenerLabel>Genre1</GenerLabel>
          </CircleContainer>
          <CircleContainer>
            {" "}
            <CircleBorder>
              <Circle></Circle>
            </CircleBorder>
            <GenerLabel>Genre2</GenerLabel>
          </CircleContainer>
          <CircleContainer>
            {" "}
            <CircleBorder>
              <Circle></Circle>
            </CircleBorder>
            <GenerLabel>Genre3</GenerLabel>
          </CircleContainer>
          <CircleContainer>
            <CircleBorder>
              <Circle></Circle>
            </CircleBorder>
            <GenerLabel>Genre4</GenerLabel>
          </CircleContainer>
        </CircleGenreWrapper>
      </MainContent>
    </ContainerDiv>
  </div>
);
export default Home;
