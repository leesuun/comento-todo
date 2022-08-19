import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.header``;
const Title = styled.h2``;
const Main = styled.main``;
const Section = styled.section``;
const Footer = styled.footer``;

function App() {
  return (
    <Wrapper>
      <Header>
        <Title>TO-do</Title>
      </Header>
      <Main>
        <Section></Section>
        <Section></Section>
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
