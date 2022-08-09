import { MouseEventHandler, ReactNode } from "react";

export interface Todo {
  todoObject: Array<{ id: string; todoName: string }>;
}

export interface ToDoItem {
  itemtext: string;
}

export interface Card {
  className: string;
  children: ReactNode;
}

export interface ActionButtons {
  edithandler: MouseEventHandler; //To check with TS
  deleteHandler: MouseEventHandler;
}

export interface SingleTodo {
  id: string;
  todoName: string;
}
