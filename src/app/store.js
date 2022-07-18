import { configureStore } from "@reduxjs/toolkit";
import {connectRouter, routerMiddleware} from "connected-react-router";
import { createBrowserHistory } from "history";

import loginReducer from '../features/login/loginSlice';
import newsReducer from '../features/news/newsSlice';

export const history = createBrowserHistory()

const reducer = {
  router: connectRouter(history),
  login: loginReducer,
  news: newsReducer,
};

const preloadedState = {};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})
