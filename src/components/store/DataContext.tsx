import React, { useState } from "react";
import { SingleTodo } from "../ToDoItem/Interface";

const DataContext = React.createContext({
  todotext: [{id: "1", todoName: "I am your first task. Remove me",status:'entered'  }],
  onAddTodo: (todos: SingleTodo) => {},
  onDelete: (taskID: string) => {},
});

export const DataProvider = (props: any) => {  //What to use HERE?????
  const [todotext, setTodotext] = useState([
    { id: "0.88219328a043564",status:'entered', todoName: "I am your first task. Remove me" },
  ]);

  const addTodoHandler = (todos: SingleTodo) => {
    setTodotext((prevTodos) => {
      return [...prevTodos, todos];
    });
  };

  const deleteHandler = (taskID: string) => {//we submit task name
    setTodotext((prevTodos) => {
      const updatedTodoList = prevTodos.filter((task) => task.id !== taskID);
      return updatedTodoList;
    });
  };
  return (
    <DataContext.Provider
      value={{
        todotext: todotext,
        onAddTodo: addTodoHandler,
        onDelete: deleteHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
