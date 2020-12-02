import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const NavBar = () => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div>
      <nav className="navbar bg-white px-0">
        <Link className="navbar-brand" to="/adminpage">
          <img
            src={require("../images/Logo.svg")}
            style={{ height: "6vh", width: "auto" }}
            alt=""
          ></img>
        </Link>

        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="menu1"
            data-toggle="dropdown"
          >
            <img
              src={require("../images/Toothless.jpg")}
              style={{
                height: "7vh",
                width: "auto",
                borderRadius: "50%",
              }}
            />
            <span className="caret" />
          </button>
          <ul
            className="dropdown-menu px-2"
            role="menu"
            aria-labelledby="menu1"
          >
            <li className="py-1">
              <Link to="/addbookadmin">
                <img src={require("../images/book.svg")} className="pr-2"></img>
                Add Book
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/"
                onClick={() =>
                  dispatch({
                    type: "LOGOUT",
                  })
                }
              >
                <img
                  src={require("../images/logoutAdmin.svg")}
                  className="pr-2"
                ></img>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
