import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children
    }
}

// 约束 props
Provider.propTypes = {
    store: PropTypes.object.isRequired
}

// 约束 context
Provider.childContextTypes = {
    store:PropTypes.object
}

export default Provider;