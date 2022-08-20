import {
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nowMonthAtom, toDoAtom } from "../atom";
import { Calender } from "../utils/calender";

const Section_R = styled.section`
  padding: 10px;
  background-color: ${(props) => props.theme.SectionColor_R};
`;
const Contents2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Date = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  gap: 15px;
`;

const MonthChangeBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 25px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const WeekList = styled.ul`
  display: flex;
  gap: 44px;
  font-size: 20px;
  font-weight: bold;
  color: #7befb7;
`;
const WeekItem = styled.li``;

const Days = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.div<{ isHoliday: boolean; thisMonth: boolean }>`
  padding: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.isHoliday ? "red" : "inherit")};
  opacity: ${(props) => (props.thisMonth ? 1 : 0.3)};
  pointer-events: ${(props) => (props.thisMonth ? "" : "none")};

  &:hover {
    background-color: lightgray;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 200px;
  width: 600px;
  height: 300px;
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.BasicColor};
`;
const Input = styled.input`
  height: 25px;
  width: 50%;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

interface ILocationProps {
  rowIdx: number | 0;
  colIdx: number | 0;
  month: string | "";
}

const Week = ["MON", "TUE", "WED", "THU", "FRI", "SUN", "SAT"];

function SectionR() {
  const [dayLocation, setDayLocation] = useState<ILocationProps>();
  const [showForm, setShowForm] = useState(false);
  const [toDo, setToDo] = useRecoilState(toDoAtom);
  const [addToDo, setAddToDo] = useState("");
  const [isJuly, setIsJuly] = useRecoilState(nowMonthAtom);

  const onExit = () => setShowForm((prev) => !prev);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAddToDo("");
    setToDo((prev) => {
      if (dayLocation?.rowIdx === undefined) return prev;

      if (dayLocation.month === "july") {
        const copyJuly = JSON.parse(JSON.stringify(prev.july));
        copyJuly[dayLocation.rowIdx][dayLocation.colIdx].toDo.push(addToDo);
        return { august: prev.august, july: copyJuly };
      }

      if (dayLocation.month === "august") {
        const copyAugust = JSON.parse(JSON.stringify(prev.august));
        copyAugust[dayLocation.rowIdx][dayLocation.colIdx].toDo.push(addToDo);
        return { august: copyAugust, july: prev.july };
      }

      return prev;
    });
  };

  const onClick = (rowIdx: number, colIdx: number, month: string) => {
    setDayLocation(() => {
      return { rowIdx, colIdx, month };
    });
    setShowForm((prev) => !prev);
  };

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    setAddToDo(event.currentTarget.value);
  };

  const onChangeMonth = () => setIsJuly((prev) => !prev);

  const createDay = (month: any) => {
    return month.map((rowData: any, rowIdx: number) =>
      rowData.map((colData: any, colIdx: number) => (
        <Day
          isHoliday={colData.isHoliday}
          thisMonth={colData.thisMonth}
          onClick={() => onClick(rowIdx, colIdx, `${month[0][0].month}`)}
          key={colIdx}
        >
          {colData.day}
        </Day>
      ))
    );
  };

  return (
    <Section_R>
      <Contents2>
        <Date>
          <h2>{isJuly ? "July" : "August"} 2022</h2>
          {!isJuly ? (
            <MonthChangeBtn onClick={onChangeMonth}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </MonthChangeBtn>
          ) : null}
          {!isJuly ? null : (
            <MonthChangeBtn onClick={onChangeMonth}>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </MonthChangeBtn>
          )}
        </Date>
        <WeekList>
          {Week.map((v, idx) => (
            <WeekItem key={idx}>{v}</WeekItem>
          ))}
        </WeekList>
        <hr style={{ width: "100%" }} />
        <Days>
          {isJuly ? (
            <>{createDay(Calender.july)}</>
          ) : (
            <>{createDay(Calender.august)}</>
          )}
        </Days>
        {showForm ? (
          <Form onSubmit={onSubmit}>
            <FontAwesomeIcon
              onClick={onExit}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              icon={faXmark}
            ></FontAwesomeIcon>
            <Input
              placeholder="add a toDo..."
              type="text"
              value={addToDo}
              onInput={onInput}
            />
          </Form>
        ) : null}
      </Contents2>
    </Section_R>
  );
}

export default SectionR;
