import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    { id: 1, title: "Belajar React Context", votes: 0 },
    { id: 2, title: "Kerjakan Modul 32", votes: 0 },
    { id: 3, title: "Setor Tugas todo list", votes: 0 },
    { id: 4, title: "Review Materi Javascript", votes: 0 },
  ],
});

export const currentUserState = atom({
  key: "currentUserState",
  default: "Guest",
});
