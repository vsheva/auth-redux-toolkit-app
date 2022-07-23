import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  //1* убираем Header по логину
  // ---постучаться к Storу  через UseSelector и взять значение оттуда
  // --- условие в разметке для рендера
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  //2*  посылать login action   dispatch(action), если кнопка Login была засабмичена
  //-- dispatch
  //--import autchActions из из нашего redux и берем из него  logout()  (..точнее из слайса redux toolkit через спец.синтаксис: const autchActions =authSlice.actions; autchActions.logout()===authSlice.actions.logout()     //const autchActions =authSlice.actions

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
