import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectLogged} from "./loginSlice";

export function Login() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLogged);

  useEffect(() => {
    localStorage.setItem('logged', isLogged);
  }, isLogged);

  return (
    <div>
      login {isLogged}
    </div>
  );
}
