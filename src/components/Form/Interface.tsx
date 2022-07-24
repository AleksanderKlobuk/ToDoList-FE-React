export interface NewTask {
  props?: string;
  onAddTodo: (todos: { id: string }) => void;
}

export interface TaskFrom {
  onSaveTodoData: (todoData: { todoName: string }) => void; //What type shoild be ised here??????????
}
