import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  //посылать login action   dispatch(action), если кнопка Login была засабмичена
  // --- dispatch
  // --- import autchActions из redux  --> откуда берем login(), т.е. authSlice.actions.login() или autchActions.login() //const counterActions =counterSlice.actions;
  const onLoginHandler = event => {
    event.preventDefault();
    dispatch(authActions.login()); //authSlice.actions.login()
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLoginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

/*
import {useSelector, useDispatch} from 'react-redux';
import {autchActions} from '../store/index'
*/

/*
  const dispatch= useDispatch(); //!*

  const handleLogin = () => {
    dispatch(autchActions.login());
  };

*/
