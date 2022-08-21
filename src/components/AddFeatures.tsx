import styled from "styled-components";
import Clock from "react-live-clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { themeAtom } from "../atom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled.time`
  font-size: 20px;
  font-weight: bold;
`;
const ThemeChangeIcon = styled.div<{ isDark: Boolean }>`
  font-size: 40px;
  color: ${(props) => (props.isDark ? "yellow" : "black")};
  cursor: pointer;
`;

function AddFeatures() {
  const [isDark, setIsDark] = useRecoilState(themeAtom);
  const onDarkMode = () => setIsDark((prev) => !prev);
  return (
    <Wrapper>
      <Time>
        <Clock format={"MM.DD HH:mm:ss"} ticking={true} />
      </Time>
      <ThemeChangeIcon isDark={isDark}>
        <FontAwesomeIcon
          onClick={onDarkMode}
          icon={isDark ? faSun : faMoon}
        ></FontAwesomeIcon>
      </ThemeChangeIcon>
    </Wrapper>
  );
}

export default AddFeatures;
