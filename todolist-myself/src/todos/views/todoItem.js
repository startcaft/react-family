import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    return (
      <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
          <input  
              type="checkbox" 
              checked={completed ? "checked" : ""} 
              readOnly 
              onClick={onToggle} />
          <label>{text}</label>
          <button  onClick={onRemove}>×</button>
      </li>
    )
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
  
export default TodoItem;