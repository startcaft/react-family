import React from 'react';
import Todos from './todos';
import * as Types from '../../constant';


const TodoList = () => {
    return (
        <div>
            <Todos type={Types.NEW}/>
        </div>
    )
}

export default TodoList;
