import './ActionButtons.css'
import {ActionButtons as Props} from './Interface'

const ActionButtons: React.FC<Props> = (props) => {
    return(
      <div className='todo_buttons' >
        <button className="CompletedBtn" >Completed</button>
        <button className="EditBtn" onClick={props.edithandler} >Edit</button>
        <button className="RemoveBtn" >Remove</button>
      </div>)
}

export default ActionButtons;