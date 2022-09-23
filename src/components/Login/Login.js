import React, { useState } from 'react'
import "./Login.css"
import Login_logo from "../../images/Login_logo.png"
import { auth } from '../../Firebase'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();


  const LoginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(
      (userAuth) => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            pic:userAuth.user.photoURL,
        }))
      }
    ).catch(e => {
      alert(e);
    })

  }

  const register = (e) => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          // if create successful, update user info
          displayName: name,
          photoURL: pic
        })
          .then(() => {
            // push user info into redux login
            dispatch(
              login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: pic,
              })
            );
          });
      }).catch(e => {
        alert(e);
      })
  };

  

  return (
    <div className='login'>
      <img src={Login_logo} alt="" />
      <form action="">
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (required if registering)'
        />
        <input
          type="text"
          value={pic}
          onChange={(e)=>setPic(e.target.value)}
          placeholder='Profile pic URL (optional)'
        />
        <input type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button type='submit' onClick={LoginToApp}>Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className='login_register' onClick={register}>
            Register Now
        </span>
      </p>
    </div>
  )
}

export default Login