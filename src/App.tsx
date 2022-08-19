import styled from "styled-components";
import Clock from "react-live-clock";

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

////////////////////////////////////////

const Contents2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Date = styled.h1`
  font-size: 48px;
`;

const WeekList = styled.ul`
  display: flex;
  gap: 44px;
  font-size: 20px;
`;

const WeekItem = styled.li``;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
`;
const Day = styled.div`
  border: 1px solid black;
  padding: 30px;
`;

function App() {
  const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
  ];
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
                <Time>
                  <Clock format={"HH:mm:ss"} ticking={true} />
                </Time>
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
                  {[1, 2, 3, 4, 5, 6].map((v, idx) => (
                    <Item key={idx}>오늘 할일111111111111111111</Item>
                  ))}
                </List>
              </TodayTodo>
            </Contents>
          </Section>
          <Section>
            <Contents2>
              <Date>JULY 2022</Date>
              <WeekList>
                {["MON", "TUE", "WED", "THU", "FRI", "SUN", "SAT"].map(
                  (v, idx) => (
                    <WeekItem key={idx}>{v}</WeekItem>
                  )
                )}
              </WeekList>
              <hr style={{ width: "100%" }} />
              <Days>
                {arr.map((v, idx) =>
                  v.map((v2, idx) => <Day key={idx}>{v2}</Day>)
                )}
              </Days>
            </Contents2>
          </Section>
        </Main>
      </Wrapper>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
