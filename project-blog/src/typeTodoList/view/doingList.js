import React from 'react';
import Todos from './todos';
import * as Types from '../../constant';


const DoingList = () => {
    return (
        <div>
            <Todos type={Types.DOING}/>
        </div>
    )
}

export default DoingList;