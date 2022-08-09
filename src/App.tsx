import { useState } from "react";
import NewTask from "./components/Form/NewTask";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import TaskChoice from "./components/TodoChoice/TaskChoice";
import Todos from "./components/ToDoItem/Todos";
import { SingleTodo } from "./components/ToDoItem/Interface";

const dummy_todotext = [
  {
    id: '1',
    todoName: 'Take a nap',
  },
  {
    id: '2',
    todoName: 'Take a pill',
  },
  {
    id: '.029349345',
    todoName: 'Test',
  },
];

function App() {
  const [todotext, setTodotext] = useState(dummy_todotext)

   //4th We create function which we then use as a parameter for onAddTodo in NewTask below
  const addTodoHandler = (todos: SingleTodo) => {
    setTodotext((prevTodos) => {
      return [...prevTodos, todos]
    })
      console.log(todotext) //To remove later. Just to see flow 
      console.log(todos) //To remove later. Just to see flow 
  } 
  return (
    <div className='App'>
      <NavBar/>
      <NewTask onAddTodo = {addTodoHandler}/>
      <TaskChoice/>
      <Todos todoObject={todotext} />
      <Login/>
      </div>
  );
}
export default App;