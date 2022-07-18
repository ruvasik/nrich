import {Link} from "react-router-dom";
import React from "react";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">/</Link>
      <Link to="/login">Login</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
