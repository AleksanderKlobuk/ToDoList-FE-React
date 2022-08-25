import { useContext } from "react";
import DataContext from "../store/DataContext";
import styles from "./TaskChoice.module.css";

const TaskChoice: React.FC = () => {
  const ctxData = useContext(DataContext)

  const onShowCompletedTasks = ()=>{
    ctxData.onViewChange('completed')
  }
  const onShowAllTasks = ()=>{
    ctxData.onViewChange('all')
  }
  const onShowActionedTasks = ()=>{
    ctxData.onViewChange('actioned')
  }
  return (
    <div >
      <div className={styles.choice_items}>
        <div className={styles.choice_item} onClick={onShowAllTasks}>All Tasks</div>
        <div className={styles.choice_item} onClick={onShowActionedTasks}>Actioned</div>
        <div className={styles.choice_item} onClick={onShowCompletedTasks}>Completed</div>
      </div>
    </div>
  );
};

export default TaskChoice;
