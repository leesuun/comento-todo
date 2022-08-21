import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { toDoAtom } from "../atom";

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

interface IToDoFormProps {
  rowIdx: number | 0;
  colIdx: number | 0;
  month: string | "";
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function TodoForm({
  colIdx,
  rowIdx,
  month,
  showForm,
  setShowForm,
}: IToDoFormProps) {
  const setToDo = useSetRecoilState(toDoAtom);
  const [addToDo, setAddToDo] = useState("");
  const onExit = () => setShowForm((prev) => !prev);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAddToDo("");
    setToDo((prev) => {
      if (rowIdx === undefined) return prev;

      if (month === "july") {
        const copyJuly = JSON.parse(JSON.stringify(prev.july));
        copyJuly[rowIdx][colIdx].toDo.push(addToDo);
        return { august: prev.august, july: copyJuly };
      }

      if (month === "august") {
        const copyAugust = JSON.parse(JSON.stringify(prev.august));
        copyAugust[rowIdx][colIdx].toDo.push(addToDo);
        return { august: copyAugust, july: prev.july };
      }

      return prev;
    });
  };
  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    setAddToDo(event.currentTarget.value);
  };

  return (
    <>
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
            placeholder="Add a todo..."
            type="text"
            value={addToDo}
            onInput={onInput}
          />
        </Form>
      ) : null}
    </>
  );
}

export default TodoForm;
