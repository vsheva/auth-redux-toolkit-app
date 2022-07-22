//import {createReducer} from "@reduxjs/toolkit";
import {createStore} from "redux";

import {createSlice, configureStore} from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name: "counter",
    initialState: {counter:0, showCounter:true},
    reducers:{
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        increase(state, action) {
            //state.counter= state.counter+ action.value;
            state.counter= state.counter+ action.payload;
        },
        toggle(state, action) {
            state.showCounter= !state.showCounter
        },
    }
})



const store= configureStore({ // configuration object //2
    reducer: counterSlice.reducer,
})



/**counterSlice.actions.//--actions {}   //increment, decrement, increase, toggle  - action creators */
export const counterActions =counterSlice.actions;



/** 2. const store= configureStore({
    reducer: {counter: counterSlice.reducer}
})*/


//1.const store=createStore(counterSlice.reducer)

export default store;


//4.
/**
store.dispatch({type: "increment"})
store.dispatch({type: "decrement"})
 */


/**

//1.
 import {createStore} from "redux";

const counterReducer =(state={counter:0, showCounter:true}, action) => {
    if(action.type === "increment") {
        //state.counter++  - НЕЛЬЗЯ!!! мутируем существующий обьект
        //state.counter++  - ВСЕГДА ВОЗВРВЩАТЬ (ПЕРЕЗАПИСЫВАТЬ) НОВЫЙ ОБЬЕКТ СТЕЙТА, а не мутировать тот же стейт
        return {
            counter:state.counter+1,
            showCounter:state.showCounter,
        }
    };

    if(action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter:state.showCounter,
        }
    };

    if (action.type === "increase") {
        return {
            counter: state.counter + action.value,
            showCounter:state.showCounter
        }

    };

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter:!state.showCounter,
        }
    }

    return state;
}


 //2.
 const store=createStore(counterReducer)

 export default store;

 */
