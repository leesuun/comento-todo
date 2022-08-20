import { atom } from "recoil";

export const themeAtom = atom<Boolean>({
  key: "theme",
  default: false,
});
