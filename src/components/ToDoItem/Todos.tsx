import ToDoItem from "./ToDoItem";
import "./Todos.css";
import { Todo as Props } from "./Interface";

const Todos: React.FC<Props> = (props) => {
  return (
    <div className="Todos">
      {props.todoObject.map((todos) => (
        <ToDoItem itemtext={todos.todoName} />
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
