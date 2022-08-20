import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoAtom } from "../atom";
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

const Date = styled.h1`
  font-size: 48px;
`;

const WeekList = styled.ul`
  display: flex;
  gap: 44px;
  font-size: 20px;
`;
const WeekItem = styled.li``;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.div`
  border: 1px solid black;
  padding: 30px;
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
  const [form, setForm] = useState(false);
  const [toDo, setToDo] = useRecoilState(toDoAtom);
  const [addToDo, setAddToDo] = useState("");

  const onExit = () => setForm((prev) => !prev);

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
    setForm((prev) => !prev);
  };

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    setAddToDo(event.currentTarget.value);
  };

  const createDay = (month: any) => {
    return month.map((rowData: any, rowIdx: number) =>
      rowData.map((colData: any, colIdx: number) => (
        <Day
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
        <Date>JULY 2022</Date>
        <WeekList>
          {Week.map((v, idx) => (
            <WeekItem key={idx}>{v}</WeekItem>
          ))}
        </WeekList>
        <hr style={{ width: "100%" }} />
        <Days>
          {true ? (
            <>{createDay(Calender.july)}</>
          ) : (
            <>{createDay(Calender.august)}</>
          )}
        </Days>
        {form ? (
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
