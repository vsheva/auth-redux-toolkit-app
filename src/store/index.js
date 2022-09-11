import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

// + add to Redux store --- configuration object

const store = configureStore({

  //reducer: counterSlice.reducer,    ++ берем в useSelector --> state.counter + -->(counterSlice.reducer===={counter:0, showCounter:true})-->state.counter.counter or state.counter.showCounter
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //counterSlice.reducer - часть Slice сверху,у которой берем reducer и записываем в свойство
});


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
