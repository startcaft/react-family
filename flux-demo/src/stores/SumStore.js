import AppDispatcher from '../AppDisptcher';
import * as ActionTypes from '../ActionTypes';
import CounterStore from './CounterStore.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

function computeSum(counterValues){
    let sum = 0;
    for(const key in counterValues){
        sum += counterValues[key];
    }
    return sum;
}

const SumStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function() {
      return computeSum(CounterStore.getCounterValues());
    },
  
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },
  
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
  
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  
});

SumStore.dispatcherToken = AppDispatcher.register((action) => {
    if((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)){
            AppDispatcher.waitFor([CounterStore.dispatcherToken]);
            SumStore.emitChange();
    }
})

export default SumStore;