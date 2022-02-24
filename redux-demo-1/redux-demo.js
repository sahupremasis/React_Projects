const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {

  console.log('action is: ', action);
  if (action.type == 'increment') {
    return {
        counter: state.counter + 1,
      };
  }  else if (action.type == 'decrement') {
      return {
          counter: state.counter -1
      };
  }

};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latestState:", latestState);
};

store.subscribe(counterSubscriber);

console.log("store.getState()", store.getState());

store.dispatch({type: 'increment'});

store.dispatch({type: 'decrement'});
