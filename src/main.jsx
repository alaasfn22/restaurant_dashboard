import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
import "./index.css";
import ContextApiProvider from "./utils/ContextApi.jsx";
import {Provider} from "react-redux";
import store from "./store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApiProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextApiProvider>
  </React.StrictMode>
);
