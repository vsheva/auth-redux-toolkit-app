//import {createReducer} from "@reduxjs/toolkit";
import {createStore} from "redux";

import {createSlice, configureStore} from "@reduxjs/toolkit";

//slice #1
 const counterSlice = createSlice({
    name: "counter",
    initialState: {counter:0, showCounter:true},
    reducers:{
        increment(state, action) {
            state.counter++; //mutate
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

//slice #2
const authSlice = createSlice ({
    name:"authentication",
    initialState:{isAuthenticated:false},
    reducers:{
        login(state, action){ state.isAuthenticated = true}, //mutating
        logout(state, action){ state.isAuthenticated = false},
    }
})


// + add to Redux store --- configuration object
const store= configureStore({
    //reducer: counterSlice.reducer, ++ берем в useSelector --> state.counter + -->(counterSlice.reducer===={counter:0, showCounter:true})-->state.counter.counter or state.counter.showCounter
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}, //counterSlice.reducer - часть Slice сверху,у которой берем reducer и записываем в свойство
})

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


export const counterActions =counterSlice.actions;
export const authActions =authSlice.actions;


export default store;

/**1.
 const store=createStore(counterSlice.reducer)
 */





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
