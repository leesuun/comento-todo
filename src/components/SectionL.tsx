import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo, nowMonthAtom, toDoAtom } from "../atom";
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
  const toDos = useRecoilValue(toDoAtom);
  const isAug = useRecoilState(nowMonthAtom);

  const findTodayTodo = () => {
    let showData: IToDo = { calenderInfo: {}, toDo: [], doing: [], done: [] };
    function pickUp(month: IToDo[][]) {
      month.map((row: any, rowIdx: number) =>
        row.map(
          (
            col: { calenderInfo: { day: number; thisMonth: boolean } },
            colIdx: number
          ) => {
            const { day, thisMonth } = col.calenderInfo;
            const toDayInfo = new Date().toDateString().slice(4, 10).split(" ");
            if (String(day) === toDayInfo[1] && thisMonth) {
              showData = month[rowIdx][colIdx];
              return showData;
            }
            return null;
          }
        )
      );
    }
    isAug ? pickUp(toDos.august) : pickUp(toDos.september);
    return showData;
  };

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
            {findTodayTodo()["toDo"].map((v, idx) => (
              <Item key={idx}>{v}</Item>
            ))}
          </List>
        </TodayTodo>
      </Contents>
    </Section>
  );
}

export default SectionL;
