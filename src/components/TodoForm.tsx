import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { IToDo, toDoAtom } from "../atom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 200px;
  width: 600px;
  height: 400px;
  padding: 20px;
  border-radius: 30px;
  gap: 15px;
  background-color: ${(props) => props.theme.BasicColor};

  background: radial-gradient(#b7eef7, ${(props) => props.theme.BasicColor});
`;

const XMarkIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 30px;
  cursor: pointer;
`;

const Input = styled.input`
  height: 25px;
  width: 50%;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

const Contents = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px;
  min-height: 300px;
`;

const ToDoTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const TodoList = styled.ul`
  width: 200px;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background-color: lightgray;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TodoItem = styled.li`
  padding: 7px 3px;
  text-align: left;
  border-radius: 5px;
  background-color: whitesmoke;
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
  const [toDos, setToDo] = useRecoilState(toDoAtom);
  const [addToDo, setAddToDo] = useState("");

  const findSelectTodo = () => {
    const selectTodoList: any = {};

    const pushData = (month: IToDo[][]) => {
      selectTodoList.toDo = month[rowIdx][colIdx].toDo;
      selectTodoList.doing = month[rowIdx][colIdx].doing;
      selectTodoList.done = month[rowIdx][colIdx].done;
    };
    switch (month) {
      case "july": {
        pushData(toDos.july);
        break;
      }
      case "august": {
        pushData(toDos.august);
        break;
      }
      default:
        break;
    }
    return selectTodoList;
  };

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
          <XMarkIcon>
            <FontAwesomeIcon onClick={onExit} icon={faXmark}></FontAwesomeIcon>
          </XMarkIcon>
          <Input
            placeholder="Add a todo..."
            type="text"
            value={addToDo}
            onInput={onInput}
          />
          <Contents>
            {month === "july"
              ? Object.keys(findSelectTodo()).map((toDo) => (
                  <TodoList key={toDo}>
                    <ToDoTitle>
                      {toDo[0].toUpperCase() + toDo.slice(1)}
                    </ToDoTitle>
                    {findSelectTodo()[toDo].map((text: string) => (
                      <TodoItem key={text}>{"• " + text}</TodoItem>
                    ))}
                  </TodoList>
                ))
              : null}
          </Contents>
        </Form>
      ) : null}
    </>
  );
}

export default TodoForm;
