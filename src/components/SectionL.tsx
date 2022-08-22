import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { IToDo, nowMonthAtom, toDoAtom, toDoObj } from "../atom";
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
  cursor: pointer;
  position: relative;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 34px;
`;
const Item = styled.li``;

const UnderLine = styled(motion.span)`
  width: 35px;
  height: 1px;
  border-radius: 5px;
  background-color: red;
  position: absolute;
  bottom: 2px;
  right: 0;
  left: 0;
  margin: 0 auto;
`;

function SectionL() {
  const toDos = useRecoilValue(toDoAtom);
  const isAug = useRecoilState(nowMonthAtom);
  const [btn, setButton] = useState("toDo" || "doing" || "done");

  const onClickBtn = (state: string) => setButton(state);

  const findTodayTodo = () => {
    let showData: any = toDoObj;
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
            <AnimatePresence>
              <StateBtn onClick={() => onClickBtn("toDo")}>
                <span>Todo</span>
                {btn === "toDo" && <UnderLine layoutId="line" />}
              </StateBtn>
              <StateBtn onClick={() => onClickBtn("doing")}>
                <span>Doing</span>
                {btn === "doing" && <UnderLine layoutId="line" />}
              </StateBtn>
              <StateBtn onClick={() => onClickBtn("done")}>
                <span>Done</span>
                {btn === "done" && <UnderLine layoutId="line" />}
              </StateBtn>
            </AnimatePresence>
          </ToDoSelect>
          <List>
            {findTodayTodo()[btn].map((v: any, idx: any) => (
              <Item key={idx}>{"• " + v}</Item>
            ))}
          </List>
        </TodayTodo>
      </Contents>
    </Section>
  );
}

export default SectionL;
