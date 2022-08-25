import styles from "./ActionButtons.module.css";
import { ActionButtons as Props } from "./Interface";

const ActionButtons: React.FC<Props> = ({completer,edithandler,removehandler,taskstatus}) => {

  return (
    <div className={styles.todo_buttons}>
      {taskstatus==='entered' && <button className={styles.CompletedBtn} onClick={completer}>Completed</button>}
      {taskstatus==='entered' && <button className={styles.EditBtn} onClick={edithandler}>Edit</button>}
      <button className={styles.RemoveBtn} onClick={removehandler}>Remove</button>
    </div>
  );
};

export default ActionButtons;

//I could also disactivate uttons if props.taskstatus==='entered'  is false