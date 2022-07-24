import React, { FormEvent, useState } from "react";
import "./TaskForm.css";
import { TaskFrom as Props } from "./Interface";

const TaskForm: React.FC <Props> = (props) => {//To provide correct type
  const [enteredTodo, setEnteredTodo] = useState('')

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{//To double check with Types
    setEnteredTodo(event.target.value)
  }

  const submitHandler = (event: FormEvent) => { //To double check with Types
    event.preventDefault();
    const todoData = {
      todoName: enteredTodo
    }
    props.onSaveTodoData(todoData)//3rd H
    setEnteredTodo('')//TF1 
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>What you have in mind</label>
          <input onChange={handleOnChange} value={enteredTodo} type="text" placeholder="..."></input>
        </div>
      </div>
      <div className="new-task__actions">
        <button type="submit">Create Task</button>
      </div>
    </form>
  );
};

export default TaskForm;





//3rd ere whem we call our function and we provifr todoData as a parameter which will receive as a parameter in NewTask
//TF1 enteredTodo to empty string. Clears form as we use enteredTodo as value for imput