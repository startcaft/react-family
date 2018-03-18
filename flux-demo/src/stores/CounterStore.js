import AppDispatcher from '../AppDisptcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First':0,
    'Second':10,
    'Third':20
};

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues:function(){
        return counterValues;
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
});

CounterStore.dispatcherToken = AppDispatcher.register((action) => {
    if(action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        // 广播事件
        CounterStore.emitChange();
    }
    else if(action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        // 广播事件
        CounterStore.emitChange();
    }
})


export default CounterStore;