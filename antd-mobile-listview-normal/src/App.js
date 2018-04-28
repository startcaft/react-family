import React, {Component} from 'react';
import './App.css';
import {ListView} from 'antd-mobile';

const styles = {
    body:{
        flex:1,
    },
}

class App extends Component {

    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1','row 2']),
        };
    }

    renderRow(rowData){
        return <div>{rowData}</div>
    }

    render() {
        return (
            <ListView
                style={styles.body}
                useBodyScroll={true}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
        );
    }
}

export default App;
