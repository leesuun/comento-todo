import styled from "styled-components";
import Clock from "react-live-clock";
import { useRecoilState } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";
import { themeAtom } from "./atom";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display:block;

  }
  body {
    line-height: 1;
    color: ${(props) => props.theme.textColor}

  }
  ol, ul {
    list-style: none;

  }
  blockquote, q {
    quotes: none;

  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 7px solid black;
  padding: 15px;
`;
const Header = styled.header`
  color: black;
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
const Section_L = styled.section`
  padding: 10px;
  background-color: ${(props) => props.theme.SectionColor_L};
`;

const Section_R = styled.section`
  padding: 10px;
  background-color: ${(props) => props.theme.SectionColor_R};
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
  align-items: center;
`;
const Time = styled.time`
  font-size: 20px;
  font-weight: bold;
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
  const [isDark, setIsDark] = useRecoilState(themeAtom);

  const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
  ];

  const onDarkMode = () => setIsDark((prev) => !prev);
  console.log(isDark);

  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <Wrapper>
          <Header>
            <Title>TO-DO</Title>
          </Header>
          <Main>
            <Section_L>
              <Contents>
                <AddFeatures>
                  <Time>
                    <Clock format={"HH:mm:ss"} ticking={true} />
                  </Time>
                  <FontAwesomeIcon
                    onClick={onDarkMode}
                    icon={isDark ? faSun : faMoon}
                    style={{
                      fontSize: "40px",
                      color: isDark ? "yellow" : "black",
                      cursor: "pointer",
                    }}
                  ></FontAwesomeIcon>
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
            </Section_L>
            <Section_R>
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
            </Section_R>
          </Main>
        </Wrapper>
        <Footer>footer</Footer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
