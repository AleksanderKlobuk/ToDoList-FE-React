import Card from "./Card";
import styles from "./ToDoItem.module.css";
import React, { ChangeEvent, useContext, useState } from "react";
import ActionButtons from "./ActionButtons";
import { ToDoItem as Props } from "./Interface";
import DataContext from "../store/DataContext";

const ToDoItem: React.FC<Props> = (props) => {
  const [itemtext, setItemtext] = useState(props.itemtext);
  const [inputOn, setInputOn] = useState(false);
  const [updatedItemText, setUpdatedTask] = useState("");
  const [taskstatus, setTaskStatus] = useState("entered");
  const ctx = useContext(DataContext);

  const editTaskHandler = (event: ChangeEvent<HTMLInputElement>  ) => {
    setUpdatedTask(event.target.value);
  };
  const updateHendler = () => {
    setInputOn(true);
  };
  const saveUpdateHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setItemtext(updatedItemText);
    setInputOn(false);
  };
  const clickDeleteHandler = () => {
    ctx.onDelete(props.id);
  };

  const statusChangeHandler = () => {
    setTaskStatus("completed");
  };

  return (
    <div>
      {ctx.taskview === "actioned" && taskstatus === "entered" && (
        <Card className={`${styles.todo_item} ${taskstatus.includes('c')&& styles.completed_task}`}>
          <div className={styles.todo_item__description}>
            <h2>{itemtext}</h2>
            {inputOn && (
              <form onSubmit={saveUpdateHandler}>
                <input onChange={editTaskHandler}></input>
                <button>Amend</button>
              </form>
            )}
          </div>
          <ActionButtons
            taskstatus={taskstatus}
            edithandler={updateHendler}
            removehandler={clickDeleteHandler}
            completer={statusChangeHandler}
          />
        </Card>
      )}
      {ctx.taskview === "completed" && taskstatus === "completed" && (
        <Card className={`${styles.todo_item} ${taskstatus.includes('c')&& styles.completed_task}`}>
          <div className={styles.todo_item__description}>
            <h2>{itemtext}</h2>
            {inputOn && (
              <form onSubmit={saveUpdateHandler}>
                <input onChange={editTaskHandler}></input>
                <button>Amend</button>
              </form>
            )}
          </div>
          <ActionButtons
            taskstatus={taskstatus}
            edithandler={updateHendler}
            removehandler={clickDeleteHandler}
            completer={statusChangeHandler}
          />
        </Card>
      )}
      {ctx.taskview === "all" && (taskstatus === "entered" || "completed") && (
        <Card className={`${styles.todo_item} ${taskstatus==='completed'&& styles.completed_task}`}>
          <div className={styles.todo_item__description}>
            <h2>{itemtext}</h2>
            {inputOn && (
              <form onSubmit={saveUpdateHandler}>
                <input onChange={editTaskHandler}></input>
                <button>Amend</button>
              </form>
            )}
          </div>
          <ActionButtons
            taskstatus={taskstatus}
            edithandler={updateHendler}
            removehandler={clickDeleteHandler}
            completer={statusChangeHandler}
          />
        </Card>
      )}
    </div>
  );
};

export default ToDoItem;
