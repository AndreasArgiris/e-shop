import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//wrap the application with router
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./context/reducer";
//wrap the application with context provider
import { StateProvider } from "./context/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
