import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/services/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
