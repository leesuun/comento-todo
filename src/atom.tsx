import { atom } from "recoil";

interface IToDo {
  toDo: string[];
  doing: string[];
  done: string[];
}
const toDoObj: IToDo = {
  toDo: [],
  doing: [],
  done: [],
};

export const themeAtom = atom<Boolean>({
  key: "theme",
  default: false,
});

export const nowMonthAtom = atom({
  key: "month",
  default: true,
});

export const toDoAtom = atom({
  key: "toDo",
  default: {
    july: [...Array(7)].map((_) => [...Array(6)].map((_) => toDoObj)),
    august: [...Array(7)].map((_) => [...Array(6)].map((_) => toDoObj)),
  },
});
