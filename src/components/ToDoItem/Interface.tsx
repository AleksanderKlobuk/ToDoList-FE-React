import { MouseEventHandler, ReactNode } from "react";

export interface Todos {}

export interface ToDoItem {
  itemtext: string;
  status: string;
  id: string;
}

export interface Card {
  className: string;
  children: ReactNode;
}

export interface ActionButtons {
  removehandler: any;
  edithandler: MouseEventHandler; //To check with TS
}

export interface SingleTodo {
  id: string;
  todoName: string;
  status: string;
}
