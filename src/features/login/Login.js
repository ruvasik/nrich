import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginAsync, selectLogged} from "./loginSlice";
import {useNavigate} from "react-router-dom";
import styles from './Login.module.css';

const renderForm = (onSubmit, status) => (
  <section className={styles.section}>
    { status === 'no' && 'Имя пользователя или пароль введены неверно' }
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <input type="text" name="email" className={styles.input} />
      </div>
      <div className={styles.row}>
        <input type="password" name="password" className={styles.input} />
      </div>

      <input type="submit" value="Login" />
    </form>
  </section>
)

export function Login() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged === 'yes')
      navigate('/profile', { replace: true });
  }, [isLogged]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    dispatch(loginAsync({email, password}));
  }, []);

  if (isLogged === 'yes') return false;

  return (
    <div>
      <div className={styles.credentials}>
        Успешный логин при email eve.holt@reqres.in плюс любой пароль
      </div>

      <div>
        { renderForm(onSubmit, isLogged) }
      </div>
    </div>
  );
}
