import { atom } from "recoil";

export interface IToDo {
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
    july: [...Array(6)].map((_) => [...Array(7)].map((_) => toDoObj)),
    august: [...Array(6)].map((_) => [...Array(7)].map((_) => toDoObj)),
  },
});
