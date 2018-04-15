import React from 'react';
import Todos from './todos';
import * as Types from '../../constant';


const DoneList = () => {
    return (
        <div>
            <Todos type={Types.DONE}/>
        </div>
    )
}

export default DoneList;