import {createStore} from "redux";

//1.
const counterReducer =(state={counter:0, showCounter:true}, action) => {
    if(action.type === "increment") {
        return {
            counter: state.counter + 1,
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


//4.
/**
store.dispatch({type: "increment"})
store.dispatch({type: "decrement"})
 */
