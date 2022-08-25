import { useContext } from "react";
import NewTask from "./components/Form/NewTask";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import TaskChoice from "./components/TodoChoice/TaskChoice";
import Todos from "./components/ToDoItem/Todos";
import AuthContext from "./components/store/AuthContext";
import { DataProvider } from "./components/store/DataContext";

function App() {
  const ctxAuth = useContext(AuthContext)

  return (
    <div className="App">
      <DataProvider>
        {!ctxAuth.isLoggedIn && < Login />}
        {ctxAuth.isLoggedIn && < NavBar />}
        {ctxAuth.isLoggedIn && <NewTask />}
        {ctxAuth.isLoggedIn && <TaskChoice />}
        {ctxAuth.isLoggedIn && <Todos />}
      </DataProvider>
    </div>
  );
}
export default App;







/*!!!!BEFORE!!!! useContext
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
];*/
/* !!!!BEFORE!!!! useContext
  const [todotext, setTodotext] = useState([{id:'1', todoName:'I am your first task. Remove me'}])

   //4th We create function which we then use as a parameter for onAddTodo in NewTask below
  const addTodoHandler = (todos: SingleTodo) => {
    setTodotext((prevTodos) => {
      return [...prevTodos, todos]
    })
      console.log(todotext) //To remove later. Just to see flow 
      console.log(todos) //To remove later. Just to see flow 
  } 

  const deleteHandler = (taskID:any) =>{
    setTodotext((prevTodos) => {
      const updatedTodoList = prevTodos.filter(task=> task.id !== taskID)
      return updatedTodoList;
    })
  }*/
