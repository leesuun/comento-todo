import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 7px solid black;
  padding: 15px;
`;
const Header = styled.header`
  border: 5px solid red;
`;
const Title = styled.h2`
  font-size: 36px;
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 50px;
  border: 5px solid red;
  width: 1000px;
  max-height: 700px;
`;
const Section = styled.section`
  padding: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const Footer = styled.footer`
  margin-top: 30px;
  height: 100px;
  border: 3px solid green;
`;
const AddFeatures = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Time = styled.time`
  font-size: 20px;
`;
const Icon = styled.span`
  font-size: 25px;
`;

const Weather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;
const WeatherImg = styled.img`
  border: 1px solid black;
  width: 70px;
  height: 70px;
`;
const Temp = styled.strong`
  font-size: 25px;
`;
const WeatherState = styled.small``;

const TodayTodo = styled.div`
  width: 100%;
`;
const ToDoSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 3px;
  text-align: center;
`;
const StateBtn = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 35px;
`;
const Item = styled.li``;
function App() {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>TO-DO</Title>
        </Header>
        <Main>
          <Section style={{ backgroundColor: "#8588dd" }}>
            <Contents>
              <AddFeatures>
                <Time>17:06:20</Time>
                <Icon>🌙</Icon>
              </AddFeatures>
              <Weather>
                <WeatherImg />
                <Temp>13C</Temp>
                <WeatherState>partly-cloudy-night</WeatherState>
              </Weather>
              <TodayTodo>
                <ToDoSelect>
                  <StateBtn>todo</StateBtn>
                  <StateBtn>doing</StateBtn>
                  <StateBtn>done</StateBtn>
                </ToDoSelect>
                <List>
                  <Item>오늘 할일11111111111111111111</Item>
                  <Item>오늘 할일1111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                  <Item>오늘 할일111111111111111111</Item>
                </List>
              </TodayTodo>
            </Contents>
          </Section>
          <Section>section_2</Section>
        </Main>
      </Wrapper>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
