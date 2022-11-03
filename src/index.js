import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer/Footer";

import App2 from "./App2";
import App3 from "./App3";
import { Provider } from "react-redux";
import store from "./redux/store";

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <App3 />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
