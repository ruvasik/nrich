import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    counter: counterReducer,
    login: loginReducer,
  },
  middleware: [routerMiddleware(history)],
});
