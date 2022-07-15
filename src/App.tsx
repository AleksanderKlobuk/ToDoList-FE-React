import NewTask from "./components/Form/NewTask";
import Todos from "./components/ToDoItem/Todos";

function App() {
  
  const TodoText = [
    {
      Item: "Take a nap"
    },
    {
      Item: "Stock bet"
    },
    {
      Item: 'Something To do'
    },
    {
      Item: "Nice Shit"
    },
    {
      Item: "Szmicel Gewonen"
    },
  ];
  
  return (
    
    <div className="App">
      <NewTask/>
      <Todos text={TodoText} />
      </div>
  );
}

export default App;
