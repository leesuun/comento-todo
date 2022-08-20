import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { DarkTheme, LightTheme } from "./theme";
import { themeAtom } from "./atom";

import SectionL from "./components/SectionL";
import SectionR from "./components/SectionR";

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
  box-shadow: 5px 5px 5px black;
  width: 1000px;
  max-height: 700px;
`;

const Footer = styled.footer`
  margin-top: 30px;
  height: 100px;
  border: 3px solid green;
`;

function App() {
  const isDark = useRecoilValue(themeAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <Wrapper>
          <Header>
            <Title>TO-DO</Title>
          </Header>
          <Main>
            <SectionL />
            <SectionR />
          </Main>
        </Wrapper>
        <Footer>footer</Footer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
