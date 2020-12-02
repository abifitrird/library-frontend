import React, { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";
import ReadBook from "./pages/ReadBook";
import AdminPage from "./pages/AdminPage";
import AddBookAdmin from "./pages/AddBookAdmin";

import PrivateRoute from "./components/PrivateRoute";

import { API, setAuthToken } from "./config/api";

import { CartContext } from "./context/cartContext";

//  if token is available in local storage then set default header for auth
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [state, dispatch] = useContext(CartContext);
  // let history = useHistory();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.data.user,
        });
        // history.push("/home");
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    };

    loadUser();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <PrivateRoute exact path="/" component={Home} />
        {/* <PrivateRoute exact path="/:id" component={Home} /> */}
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/mylibrary" component={MyLibrary} />
        <PrivateRoute exact path="/addbook" component={AddBook} />
        <PrivateRoute exact path="/bookdetail/:id" component={BookDetail} />
        <PrivateRoute exact path="/readbook" component={ReadBook} />
        <PrivateRoute exact path="/adminpage" component={AdminPage} />
        <PrivateRoute exact path="/addbookadmin" component={AddBookAdmin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
