import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {login, logout, selectUser} from './features/userSlice.js'
import './App.css';
import Header from './components/Header/Header.js';
import SideBar from './components/SideBar/SideBar.js';
import Feed from './components/Feed/Feed.js'
import Login from './components/Login/Login.js'
import { auth } from './Firebase.js';
import Widgets from './components/Widgets/Widgets.js';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // listener = listen the authentication change == login logout..
    // set user info in loginpage
    // set user auth info comeback and stay in homepage
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is login
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }
      else {
        //user logout
        dispatch(logout());
      }
    })
  },[])
  

  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* if no user, render login page */}
      {!user ? (
        <Login />
      ) : (
          <div className="app_body">
          <SideBar />
          <Feed/>
        {/* widgets */}
        <Widgets/>
      </div>
    )}
      
    </div>
  );
}

export default App;
