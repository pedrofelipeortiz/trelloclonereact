import React from 'react';
import "./components.css";
import {useSelector} from 'react-redux'
const Comment = (props) => {
    const users = useSelector(state => state.board.users)
    let owner=users.find((user =>user.id===props.owner))
    let {first_name,last_name}=owner
    return (
    <div className='comment'>
        <div className="rem2">
           {props.message}
        </div>
        <div>
           By : {first_name}{last_name}
        </div>
    </div>
    
          )
 }
export default Comment;