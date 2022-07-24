import Card from "./Card";
import "./ToDoItem.css";
import {  useState } from "react";
import ActionButtons from "./ActionButtons";
import  {ToDoItem as Props} from './Interface' 

const ToDoItem: React.FC<Props> = (props) => {
  //const itemtext = props.itemtext - once we start use useState we can use text as variable for props.itemtext
  const [itemtext, setItemtext] = useState(props.itemtext)
   
  const clickHendler =()=>{
    setItemtext('Updated')
  }

  return (
    <Card className="todo-item" >
      <div className="todo-checkbox">
        <input type='checkbox' ></input>
      </div>
      <div className="todo-item__description ">
        <h2>{itemtext}</h2>
      </div>
      <ActionButtons edithandler = {clickHendler}/>
    </Card>
  );
};

export default ToDoItem;
