import { TODO_ATOM_KEY } from "../constants";
import { atom } from "recoil";
import { ITodo } from "./types";

export const todoState = atom<ITodo[]>({
  key: TODO_ATOM_KEY,
  default: [],
});
