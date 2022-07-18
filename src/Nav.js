import globals from "./global.module.css";
import {Link} from "react-router-dom";
import React from "react";

export function Nav() {
  return (
    <nav className={globals.nav}>
      <Link to="/">/</Link>
      <Link to="/login">Login</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
