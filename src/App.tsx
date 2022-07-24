import { useState } from "react";
import NewTask from "./components/Form/NewTask";
import TaskChoice from "./components/TodoChoice/TaskChoice";
import Todos from "./components/ToDoItem/Todos";


const dummy_todotext = [
  {
    id:'1',
    todoName: "Take a nap",
  },
  {
    id:"2",
    todoName: "Take a pill",
  },
  {
    id:".029349345",
    todoName: "Test",
  },

];

function App() {
  const [todotext, setTodotext] = useState(dummy_todotext)

   //4th We create function which we then use as a parameter for onAddTodo in NewTask below
  const addTodoHandler = (todos:any) =>{
    setTodotext((prevTodos) => {
      return [...prevTodos, todos]//Why it does not work when we do return [ todos,...prevTodos]!!!!!!!
    })
      console.log(todotext) //To remove later. Just to see flow 
      console.log(todos) //To remove later. Just to see flow 
  } 
  return (
    <div className="App">
      <NewTask onAddTodo = {addTodoHandler}/>
      <TaskChoice/>
      <Todos todoObject={todotext} />
      </div>
  );
}
export default App;
