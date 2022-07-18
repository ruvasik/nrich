import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectLogged} from "./loginSlice";

import styles from './Login.module.css';

export function Login() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLogged);

  console.log('isLogged', isLogged);

  return (
    <div>
      <div className={styles.credentials}>
        email: joe@example.com
        <br/>
        password: Password1
      </div>

      <form className={styles.form}>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
