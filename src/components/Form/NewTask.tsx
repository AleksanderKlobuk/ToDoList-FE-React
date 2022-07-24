import React from "react";
import "./NewTask.css";
import TaskForm from "./TaskForm";
import { NewTask as Props } from "./Interface";

const NewTask: React.FC<Props> = (props) => {//2nd
  const saveTodoDataHandler = (enteredTodoData: {}) => {//To check if enteredTodoData:{} is correct here as for TS
    const todoData = {//NT1
      id: Math.random().toString(),
      ...enteredTodoData, //NT2
    };
    props.onAddTodo(todoData); //5th
  };
  return (
    <div className="new-task">
      <TaskForm onSaveTodoData={saveTodoDataHandler} /*1st*/ />
    </div>
  );
};
export default NewTask;






/*1st step. Yhe value of this prop should be a function. 
Function which will be triggered when something happends inside of thisForm compoennt. 
In this case when user saves enteredTodo data so when the form is submitted*/

//2nd We devfine function which we will use as a value for onSaveTodoData
//This function now expects parameter enteredTodoData

//5th as a prop we reveived function createrd in App.js. and we pass todoData as an argument

//NT1 We pull out all objects from parameter enteredTodoData and assigne thwm to todoData
//NT2 We generate random id. Can be done better. To have a look later
