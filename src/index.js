/* eslint-disable no-console */
/* eslint-disable import/default */
import "babel-polyfill";
import React                      from "react";
import { render }                 from "react-dom";
import { Router, browserHistory } from "react-router";
import routes                     from "./routes";
import configureStore             from "./store/configureStore";
import { Provider }               from "react-redux";
import { loadCourses }            from "./actions/courseActions";
import { loadAuthors }            from "./actions/authorActions";

import "./styles/styles.css";  // Webpack supports CSS imports and bundling as well!
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/toastr/build/toastr.min.css";
// import "jquery";
// import "bootstrap-loader";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
