const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
 if(action.type === 'increment'){
  return {
    counter: state.counter + 1
  }
 } else if (action.type === 'decrement'){
  return {
    counter: state.counter - 1
  }
 }
}
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state);
}

store.subscribe(counterSubscriber);
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
