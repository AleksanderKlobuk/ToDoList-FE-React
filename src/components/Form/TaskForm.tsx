import './TaskForm.css'

const TaskForm = () => {
  return (
    <form>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>What you have in mind</label>
          <input type="text" placeholder="..."></input>
        </div>
      </div>
      <div className="new-task__actions">
        <button type="submit">Create Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
