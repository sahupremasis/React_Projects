import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  console.log("counterReducer", state);
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  } else if (action.type === "toggleCounter") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  } else {
    return state;
  }
};


const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
