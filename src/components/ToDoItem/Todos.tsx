import ToDoItem from "./ToDoItem";
import styles from "./Todos.module.css";
import { useContext } from "react";
import DataContext from "../store/DataContext";

const Todos: React.FC = () => {
  const ctx = useContext(DataContext)

  return (
    <div className={styles.Todos}>
      {ctx.todotext.map((todos) => (
        <ToDoItem itemtext={todos.todoName} key={todos.id} id={todos.id} status={todos.status}/>
      ))}
    </div>
  );
};

export default Todos;







/*Hard coded TodoItem (with no .map())
<ToDoItem itemtext={props.todoObject[0].todoName}/>
<ToDoItem itemtext={props.todoObject[1].todoName}/>
<ToDoItem itemtext={props.todoObject[2].todoName}/>
<ToDoItem itemtext={props.todoObject[3].todoName}/>
<ToDoItem itemtext={props.todoObject[4].todoName}/>
*/
