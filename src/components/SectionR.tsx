import styled from "styled-components";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { nowMonthAtom } from "../atom";
import { Calender, ICalenderProps } from "../utils/calender";
import TodoForm from "./TodoForm";

const Section = styled.section`
  padding: 10px;
  background-color: ${(props) => props.theme.SectionColor_R};
`;
const Contents = styled.div`
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
  color: #2fe78e;
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
  text-align: center;
  color: ${(props) => (props.isHoliday ? "red" : "inherit")};
  opacity: ${(props) => (props.thisMonth ? 1 : 0.3)};
  pointer-events: ${(props) => (props.thisMonth ? "" : "none")};

  &:hover {
    background-color: lightgray;
  }
`;

export interface ILocationProps {
  rowIdx: number;
  colIdx: number;
  month: string;
}

const Week = ["MON", "TUE", "WED", "THU", "FRI", "SUN", "SAT"];

function SectionR() {
  const [dayLocation, setDayLocation] = useState<ILocationProps>();
  const [showForm, setShowForm] = useState(false);
  const [isAug, setIsAug] = useRecoilState(nowMonthAtom);

  const onClick = (rowIdx: number, colIdx: number, month: string) => {
    setDayLocation(() => {
      return { rowIdx, colIdx, month };
    });
    setShowForm((prev) => !prev);
  };

  const onChangeMonth = () => setIsAug((prev) => !prev);

  const createDay = (month: ICalenderProps[][]) => {
    return month.map((rowData, rowIdx) =>
      rowData.map((colData, colIdx) => (
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
    <Section>
      <Contents>
        <Date>
          <h2>{isAug ? "August" : "September"} 2022</h2>
          {!isAug ? (
            <MonthChangeBtn onClick={onChangeMonth}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </MonthChangeBtn>
          ) : null}
          {!isAug ? null : (
            <MonthChangeBtn onClick={onChangeMonth}>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </MonthChangeBtn>
          )}
        </Date>
        <WeekList>
          {Week.map((v) => (
            <WeekItem key={v}>{v}</WeekItem>
          ))}
        </WeekList>
        <hr style={{ width: "100%" }} />
        <Days>
          {isAug ? (
            <>{createDay(Calender.august)}</>
          ) : (
            <>{createDay(Calender.september)}</>
          )}
        </Days>
        <TodoForm
          colIdx={dayLocation?.colIdx || 0}
          rowIdx={dayLocation?.rowIdx || 0}
          month={dayLocation?.month || ""}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </Contents>
    </Section>
  );
}

export default SectionR;
