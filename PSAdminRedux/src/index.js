import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import configureStore from "./store/configureStore";
import routes from "./routes";
import "./styles/styles.css"; // Webpack can import CSS files.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

// The higher order Provider component essentially wraps our
// entire application so that our react app is connected to our store.
render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes }/>
  </Provider>,
  document.getElementById("app")
);
