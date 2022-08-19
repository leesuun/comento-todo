import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 7px solid black;
  padding: 15px;
  height: 100vh;
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
  height: 100%;
  width: 1000px;
`;
const Section = styled.section`
  border: 3px solid green;
`;
const Footer = styled.footer`
  margin-top: 30px;
  height: 100px;
  border: 3px solid green;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>TO-DO</Title>
        </Header>
        <Main>
          <Section>section_1</Section>
          <Section>section_2</Section>
        </Main>
      </Wrapper>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
