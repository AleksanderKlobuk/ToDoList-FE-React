import Card from "./Card";
import styles from "./ToDoItem.module.css";
import {  useState } from "react";
import ActionButtons from "./ActionButtons";
import  {ToDoItem as Props} from './Interface' 

const ToDoItem: React.FC<Props> = (props) => {
  //const itemtext = props.itemtext - once we start use useState we can use text as variable for props.itemtext
  const [itemtext, setItemtext] = useState(props.itemtext)
  console.log(props)
  
  const clickHendler = () => {
    setItemtext('Updated')
  }

  const deleteHandler = () => {
    setItemtext('')
  }

  return (
    <Card className={styles.todo_item} >
      <div className={styles.todo_checkbox}>
        <input type='checkbox' ></input>
      </div>
      <div className={styles.todo_item__description} >
        <h2>{itemtext}</h2>
      </div>
      <ActionButtons edithandler = {clickHendler} deleteHandler = {deleteHandler}/>
    </Card>
  );
};

export default ToDoItem;