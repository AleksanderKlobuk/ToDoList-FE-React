import Card from "./Card";
import "./ToDoItem.css";
import {  useState } from "react";
import ActionButtons from "./ActionButtons";

interface TodoItem {
 itemtext: string //To check with TS
}


const ToDoItem = (props:TodoItem) => {
  //const itemtext = props.itemtext - once we start use useState we can use text as variable for props.itemtext
  const [text, setItemtext] = useState(props.itemtext)
   
  const clickHendler =()=>{
    setItemtext('Updated')
  }

  return (
    <Card className="todo-item">
      <div className="todo-item__description ">
        <h2>{text}</h2>
      </div>
      <ActionButtons edithandler = {clickHendler}/>
    </Card>
  );
};

export default ToDoItem;
