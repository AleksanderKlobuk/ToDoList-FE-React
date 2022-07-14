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
      <h1>ToDo App</h1>
      <Todos text={TodoText} />
      </div>
  );
}

export default App;
