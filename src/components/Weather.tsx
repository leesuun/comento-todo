import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

interface IWeatherProps {
  weather: [{ description: string; icon: string }];
  main: { temp: number };
  name: string;
}

function Weather() {
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
    <Wrapper>
      <WeatherImg
        src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
      />

      <Temp>{weather?.main.temp.toFixed(1) + "℃"}</Temp>
      <WeatherState>{weather?.weather[0].description}</WeatherState>
    </Wrapper>
  );
}

export default Weather;
