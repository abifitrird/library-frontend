import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Landing from "./pages/Landing";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartContextProvider } from "./context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      {/* <Landing /> */}
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
