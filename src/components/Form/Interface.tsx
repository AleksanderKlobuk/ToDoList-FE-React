//export interface NewTask {
//  onAddTodo: (todoData: { id: string; todoName: string}) => void; 
//}

export interface TaskFrom {
  onSaveTodoData: (todoData: { todoName: string }) => void; 
}
