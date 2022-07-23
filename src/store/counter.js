//slice #1
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state, action) {
      state.counter++; //mutate
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      //state.counter= state.counter+ action.value;
      state.counter = state.counter + action.payload;
    },
    toggle(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice; //* берем часть


/**
 counterSlice.actions.increment() --> return action object {type:"some unique identifiers"}   //increment, decrement, increase, toggle  - action creators

 counterSlice.actions. ===>доступ к уникальным идентификаторам и его методу, который при вызове метода() создает action object

 counterActions:
 increment:(state: {
   counter:num
   showCounter: bool
 });
 decrement(state:{counter:num showCounter:bool})
 increase (state , action:{})
 toggle (state)

 */
