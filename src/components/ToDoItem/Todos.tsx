import ToDoItem from "./ToDoItem";
import './Todos.css'

interface TodoProps {
    text: Array<any>
  }

const Todos = (props:TodoProps)=>{
    return(<div className="Todos">
         <ToDoItem itemtext={props.text[0].Item}/>
         <ToDoItem itemtext={props.text[1].Item}/>
         <ToDoItem itemtext={props.text[2].Item}/>
         <ToDoItem itemtext={props.text[3].Item}/>
         <ToDoItem itemtext={props.text[4].Item}/>
         </div>
    )
}

export default Todos;