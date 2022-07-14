import { MouseEventHandler } from 'react';
import './ActionButtons.css'

interface ActBtnProps {
  edithandler:MouseEventHandler //To check with TS  
}
 

const ActionButtons = (props:ActBtnProps)=>{
    return(
      <div className='todo_buttons'>
        <button className="CompletedBtn">Completed</button>
        <button className="EditBtn" onClick={props.edithandler}>Edit</button>
        <button className="RemoveBtn">Remove</button>
      </div>)
}

export default ActionButtons;