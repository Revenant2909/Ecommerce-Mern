import React, { useState } from 'react'
import "./login.css";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

export default function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const dispatch = useDispatch();
   
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch,{email,password});
    }
  return (
   <div className="login">
        <span className="adminloginheading">Admin Login</span>
        <form className="loginForm">
            <input type="email" placeholder='email' className="loginInput" 
            onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='password' className="loginInput" 
            onChange={(e)=> setPassword(e.target.value)} />
            <button className="loginButton" onClick={handleLogin}>Login</button>
        </form>
   </div>
  )
}
