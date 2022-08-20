import styled from "styled-components";
import Clock from "react-live-clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { themeAtom } from "../atom";
import { useEffect, useState } from "react";

const Section = styled.section`
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
  gap: 5px;
  flex-direction: column;
`;
const WeatherImg = styled.img<{ src: string }>`
  background-image: url(src);
`;
const Temp = styled.strong`
  font-size: 25px;
  font-weight: bold;
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
  margin-top: 34px;
`;
const Item = styled.li``;

interface IWeatherProps {
  weather: [{ description: string; icon: string }];
  main: { temp: number };
  name: string;
}

function SectionL() {
  const [isDark, setIsDark] = useRecoilState(themeAtom);
  const onDarkMode = () => setIsDark((prev) => !prev);
  const [weather, setWeather] = useState<IWeatherProps>();

  useEffect(() => {
    const API_KEY = "b49d199d78db4d81dcf44e33698ac973";

    function getGeoInfoSuccess(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }

    function getGeoInfoFail() {
      alert("Cannot get the weather..!!");
    }

    navigator.geolocation.getCurrentPosition(getGeoInfoSuccess, getGeoInfoFail);
  }, []);

  return (
    <Section>
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
          <WeatherImg
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          />

          <Temp>{weather?.main.temp.toFixed(1) + "℃"}</Temp>
          <WeatherState>{weather?.weather[0].description}</WeatherState>
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
  );
}

export default SectionL;
