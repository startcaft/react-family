import React,{ Component } from 'react';
import Counter from './Counter';

class ControlPanel extends Component {

    constructor(props){
        super(props);

        this.initValues = [0,10,20];
        const initSum = this.initValues.reduce((a,b) => a + b,0);

        this.state = {
            sum : initSum
        }
    }

    onCounterUpdate(newValue,previousValue){
        const valueChange = newValue - previousValue;
        this.setState({
            sum : this.state.sum + valueChange
        })
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate.bind(this)} caption="First" initValue={this.initValues[0]} />
                <Counter caption="Second" initValue={this.initValues[1]} />
                <Counter caption="Third" initValue={this.initValues[2]} />
                <hr/>
                <div>
                    Total Count : {this.state.sum}
                </div>
            </div>
        )
    }
}


export default ControlPanel;