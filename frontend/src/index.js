import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import reducers from "./reducers";
import App from "./App";

const theme = createTheme();




const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>  {/* Hier wird das Theme bereitgestellt */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
