import Card from "./Card";
import styles from "./ToDoItem.module.css";
import { useContext, useState } from "react";
import ActionButtons from "./ActionButtons";
import { ToDoItem as Props } from "./Interface";
import DataContext from "../store/DataContext";

const ToDoItem: React.FC<Props> = (props) => {
  //const itemtext = props.itemtext - once we start use useState we can use text as variable for props.itemtext
  const [itemtext, setItemtext] = useState(props.itemtext);
  const [inputOn, setInputOn] = useState(false);
  const [updatedItemText, setUpdatedTask] = useState('');
  const ctx = useContext(DataContext);

  const editTaskHandler = (event: any) => {
    setUpdatedTask(event.target.value);
  };
  const updateHendler = () => {
    setInputOn(true);
  }
  const saveUpdateHandler = (event:any) =>{
    event.preventDefault()
    setItemtext(updatedItemText)
    setInputOn(false)
  }
  const clickDeleteHandler = () => {
    ctx.onDelete(props.id);
  };

  return (
    <Card className={styles.todo_item}>
      <div className={styles.todo_item__description}>
        <h2>{itemtext}</h2>
        {inputOn && (<form onSubmit={saveUpdateHandler}><input onChange={editTaskHandler}></input><button>Amend</button></form>)}
      </div>
      <ActionButtons
        edithandler={updateHendler}
        removehandler={clickDeleteHandler}
      />
    </Card>
  );
};

export default ToDoItem;
