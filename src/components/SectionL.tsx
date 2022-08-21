import styled from "styled-components";
import AddFeatures from "./AddFeatures";
import Weather from "./Weather";

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

function SectionL() {
  return (
    <Section>
      <Contents>
        <AddFeatures />
        <Weather />
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
