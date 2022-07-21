import {createStore} from "redux";
//1.
const counterReducer =(state={counter:0}, action) => {
    if(action.type === "increment") {
        return {
            counter: state.counter + 1,
        }
    };

    if(action.type === "decrement") {
        return {
            counter: state.counter - 1,
        }
    };
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
