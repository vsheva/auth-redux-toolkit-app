import Counter from './components/Counter';
import {useSelector} from "react-redux"

import React, {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";


function App() {

    //1* убираем Header по логину
    // --- выбираем часть состояния из redux toolkit ---постучаться к Storу  через UseSelector и взять значение оттуда
    // --- условия в разметке для рендера

   const isAuth= useSelector((state)=> state.auth.isAuthenticated) //берем часть состояния //store---> initial

  return (
      <Fragment>
        <Header />
          {!isAuth && <Auth/>}
          {isAuth && <UserProfile/>}
        <Counter />
      </Fragment>

  );
}

export default App;
