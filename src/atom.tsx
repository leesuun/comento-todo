import { atom } from "recoil";
import { Calender } from "./utils/calender";

export interface IToDo {
  toDo: string[];
  doing: string[];
  done: string[];
  calenderInfo: {};
}
const toDoObj: IToDo = {
  toDo: [],
  doing: [],
  done: [],
  calenderInfo: {},
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
    july: [...Array(6)].map((_, rowIdx) =>
      [...Array(7)].map((_, colIdx) => {
        return {
          ...toDoObj,
          calenderInfo: {
            day: Calender.july[rowIdx][colIdx].day,
            thisMonth: Calender.july[rowIdx][colIdx].thisMonth,
          },
        };
      })
    ),
    august: [...Array(6)].map((_, rowIdx) =>
      [...Array(7)].map((_, colIdx) => {
        return {
          ...toDoObj,
          calenderInfo: {
            day: Calender.august[rowIdx][colIdx].day,
            thisMonth: Calender.august[rowIdx][colIdx].thisMonth,
          },
        };
      })
    ),
  },
});
