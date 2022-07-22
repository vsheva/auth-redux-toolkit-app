import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index'


const Counter = () => {

    const counter = useSelector((state) => state.counter) //берем часть состояния
    const show = useSelector((state) => state.showCounter) // часть состояния;
    const dispatch= useDispatch(); //*

    const handleIncrement = () => {
        //dispatch({type: 'increment'})
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        //dispatch({type: 'decrement'})
        dispatch(counterActions.decrement());
    };

    const handleIncrease =()=>{
        //dispatch({type: 'increase', value:10})
        dispatch(counterActions.increase(10)); /** {type:UNIQUE_IDENTIFIER, payload:10 }  */  //({})
    }
  const toggleCounterHandler = () => {
        //dispatch({type: 'toggle'})
      dispatch(counterActions.toggle());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrease}>Increase by 10</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


/**
//Class-based component

import classes from './Counter.module.css';
import {connect} from 'react-redux';
import {Component} from "react";

class Counter extends Component {

    handleIncrement = () => {this.props.increment()}; //вызов increment:()=>dispatch({type: 'increment'})

    handleDecrement = () => {this.props.decrement()};

    toggleCounterHandler = () => {};

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        increment:()=>dispatch({type: 'increment'}),
        decrement:()=>dispatch({type: 'decrement'}),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Counter);*/
