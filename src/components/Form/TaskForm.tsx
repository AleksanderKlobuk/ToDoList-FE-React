import React, { FormEvent, useState } from "react";
import styles from "./TaskForm.module.css";
import { TaskFrom as Props } from "./Interface";

const TaskForm: React.FC <Props> = (props) => {//To provide correct type
  const [enteredTodo, setEnteredTodo] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.trim().length > 0){//TF3
      setIsValid(true)
    }
    setEnteredTodo(event.target.value)
  }

  const submitHandler = (event: FormEvent) => { 
    event.preventDefault();
    if(enteredTodo.trim().length === 0){//TF4 
      setIsValid(false)
      return;//TF5
    }
    const todoData = {
      todoName: enteredTodo
    }
    props.onSaveTodoData(todoData)//3rd H
    setEnteredTodo('')//TF1 
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles.new_task__controls} ${!isValid && styles.invalid}` }>
        <div className={styles.new_task__control}>
          <label>What you have in mind</label>
          <input onChange={handleOnChange} value={enteredTodo} type="text" placeholder={!isValid? "PLEASE TYPE TASK BEFORE SUBMIT":"..."}></input>
        </div>
      </div>
      <div className={styles.new_task__actions}>
        <button type="submit">Create Task</button>
      </div>
    </form>
  );
};

export default TaskForm;





//3rd here whem we call our function and we provide todoData as a parameter which will receive as a parameter in NewTask
//TF1 enteredTodo to empty string. Clears form as we use enteredTodo as value for imput
//TF3 If input value is greater thatn 0 we set isValid to true and our styling changes accordingly to what we have assigned to invalid class in css
//TF4 Check if we trimed entered value lenght is 0. If 0 we do not submit enteredTodo (blank todo)
//TF5  Other below lines of codes stop if input 0 since we use return here