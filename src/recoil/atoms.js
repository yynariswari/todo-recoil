import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    { id: 1, title: "Belajar React", votes: 5 },
    { id: 2, title: "Belajar Recoil", votes: 3 },
    { id: 3, title: "Belajar Routing", votes: 1 },
  ],
});

export const currentUserState = atom({
  key: "currentUserState",
  default: "Guest",
});
