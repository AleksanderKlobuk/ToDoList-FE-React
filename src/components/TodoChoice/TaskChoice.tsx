import styles from "./TaskChoice.module.css";

const TaskChoice: React.FC = () => {
  return (
    <div >
      <div className={styles.choice_items}>
        <div className={styles.choice_item}>Completed Tasks</div>
        <div className={styles.choice_item}>Actioned Tasks</div>
        <div className={styles.choice_item}>All Tasks</div>
      </div>
    </div>
  );
};

export default TaskChoice;
