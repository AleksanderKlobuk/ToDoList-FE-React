import styles from "./ActionButtons.module.css";
import { ActionButtons as Props } from "./Interface";

const ActionButtons: React.FC<Props> = (props) => {
  return (
    <div className={styles.todo_buttons}>
      <button className={styles.CompletedBtn}>Completed</button>
      <button className={styles.EditBtn} onClick={props.edithandler}>Edit</button>
      <button className={styles.RemoveBtn} onClick={props.removehandler}>Remove</button>
    </div>
  );
};

export default ActionButtons;
