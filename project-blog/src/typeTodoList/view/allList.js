/**
 * Created by startcaft on 2018/4/15.
 */


import React, { Component } from 'react';
import Todos from './todos';
import * as Types from '../../constant';


class AllList extends Component {
    render(){
        return(
            <div>
                <Todos type={Types.NEW}/>
                <Todos type={Types.DOING}/>
                <Todos type={Types.DONE}/>
            </div>
        )
    }
}

export default AllList;