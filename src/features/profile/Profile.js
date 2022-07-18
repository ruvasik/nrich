import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectLogged} from "../login/loginSlice";

import styles from './Profile.module.css';
import {useNavigate} from "react-router-dom";

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

      <input type="submit" value="Profile" />
    </form>
  </section>
)

export function Profile() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged !== 'yes')
      navigate('/login', { replace: true });
  }, [isLogged]);

  if (isLogged !== 'yes') return false;

  return (
    <div>

    </div>
  );
}
