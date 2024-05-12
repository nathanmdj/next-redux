'use client';

import { login, logout, modToggle } from "@redux/features/auth-slice";
import { AppDispatch, AppSelector } from "@redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState('');

  const user = AppSelector(state => state.authReducer.value.username)
  const modStatus = AppSelector(state => state.authReducer.value.isModerator)
  const isLogin = AppSelector(state => state.authReducer.value.isAuth)
  const dispatch = useDispatch<AppDispatch>();
  
  const onClickLogin = () => {
    dispatch(login(username));
    setUsername('');
  };

  const onClickToggle = () => {
    dispatch(modToggle())
  };

  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>User: {user !== '' ? user : 'No logged in user'}</h1>
      <h1>Mod Status: {modStatus ? 'On' : 'Off'}</h1>
      <div>
        <input
          type="text"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
          placeholder="Enter Username"
        />
      </div>
      <button
        onClick={isLogin ? onClickLogout : onClickLogin}
        className="bg-green-500 w-full"
      >{isLogin ? 'Log Out': 'Log In'}</button>
      <button
        onClick={onClickToggle}
        className={`${isLogin ? `bg-blue-500` : `bg-gray-400`} w-full`}
        disabled={!isLogin}
      >Turn {modStatus ? 'Off': 'On'} Mod</button>
    </div>
  )
}

export default Login