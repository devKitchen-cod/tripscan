import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Provider,
} from "react-redux";
import { rootReducer } from "./Store/root-reducer";
import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
		<App/>
	</BrowserRouter>
  </Provider>
);
