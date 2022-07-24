import "./TaskChoice.css";

const TaskChoice: React.FC = () => {
  return (
    <div >
      <div className="choice-items">
        <div className="choice-item">Completed Tasks</div>
        <div className="choice-item">Actioned Tasks</div>
        <div className="choice-item">All Tasks</div>
      </div>
    </div>
  );
};

export default TaskChoice;
