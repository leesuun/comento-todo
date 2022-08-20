import styled from "styled-components";
import Clock from "react-live-clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { themeAtom } from "../atom";

const Section_L = styled.section`
  padding: 10px;
  background-color: ${(props) => props.theme.SectionColor_L};
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
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

function SectionL() {
  const [isDark, setIsDark] = useRecoilState(themeAtom);
  const onDarkMode = () => setIsDark((prev) => !prev);

  return (
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
  );
}

export default SectionL;
