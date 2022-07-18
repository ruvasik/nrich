import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {Login} from "./features/login/Login";
import {News} from "./features/news/News";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Nav} from "./Nav";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
