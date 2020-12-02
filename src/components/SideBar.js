import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const SideBar = () => {
  const [state, dispatch] = useContext(CartContext);
  const dataUser = JSON.stringify(state);
  const userData = JSON.parse(dataUser);
  // console.log(userData);

  return (
    <div>
      <div className="container">
        <div className="row">
          <Link to="/">
            <img
              src={require("../images/Logo.svg")}
              style={{ height: "6vh", width: "auto" }}
            />
          </Link>
          <br></br>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <div className="row justify-content-center">
              <img
                src={`http://localhost:5001/${userData.user.photo}`}
                className="shadow mb-3"
                style={{
                  height: "15vh",
                  width: "15vh",
                  borderRadius: "50%",
                }}
                alt="my-photo"
              />
            </div>
            <div className="row justify-content-center">
              <h5>{userData.user.fullName}</h5>
            </div>
          </div>
        </div>
        <hr></hr>

        <ListGroup variant="flush">
          <ListGroup.Item
            className="sidebar-button mt-2"
            style={{
              border: "none",
              // backgroundColor: "#ee4622",
              // borderRadius: "35%",
            }}
          >
            <span>
              <svg
                className="icon mr-2"
                style={{
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                }}
              >
                <path
                  fill="currentColor"
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                />
              </svg>
            </span>
            <Link className="nav-item" to="/profile">
              Profile
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mt-2" style={{ border: "none" }}>
            <span>
              <svg
                className="icon mr-2"
                style={{
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                }}
              >
                <path
                  fill="currentColor"
                  d="M17.5 14.33C18.29 14.33 19.13 14.41 20 14.57V16.07C19.38 15.91 18.54 15.83 17.5 15.83C15.6 15.83 14.11 16.16 13 16.82V15.13C14.17 14.6 15.67 14.33 17.5 14.33M13 12.46C14.29 11.93 15.79 11.67 17.5 11.67C18.29 11.67 19.13 11.74 20 11.9V13.4C19.38 13.24 18.54 13.16 17.5 13.16C15.6 13.16 14.11 13.5 13 14.15M17.5 10.5C15.6 10.5 14.11 10.82 13 11.5V9.84C14.23 9.28 15.73 9 17.5 9C18.29 9 19.13 9.08 20 9.23V10.78C19.26 10.59 18.41 10.5 17.5 10.5M21 18.5V7C19.96 6.67 18.79 6.5 17.5 6.5C15.45 6.5 13.62 7 12 8V19.5C13.62 18.5 15.45 18 17.5 18C18.69 18 19.86 18.16 21 18.5M17.5 4.5C19.85 4.5 21.69 5 23 6V20.56C23 20.68 22.95 20.8 22.84 20.91C22.73 21 22.61 21.08 22.5 21.08C22.39 21.08 22.31 21.06 22.25 21.03C20.97 20.34 19.38 20 17.5 20C15.45 20 13.62 20.5 12 21.5C10.66 20.5 8.83 20 6.5 20C4.84 20 3.25 20.36 1.75 21.07C1.72 21.08 1.68 21.08 1.63 21.1C1.59 21.11 1.55 21.12 1.5 21.12C1.39 21.12 1.27 21.08 1.16 21C1.05 20.89 1 20.78 1 20.65V6C2.34 5 4.18 4.5 6.5 4.5C8.83 4.5 10.66 5 12 6C13.34 5 15.17 4.5 17.5 4.5Z"
                />
              </svg>
            </span>
            <Link className="nav-item" to="/mylibrary">
              My Library
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mt-2" style={{ border: "none" }}>
            <span>
              <svg
                className="icon mr-2"
                style={{
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                }}
              >
                <path
                  fill="currentColor"
                  d="M13.09 20H5V6H3V20A2 2 0 0 0 5 22H13.81A5.5 5.5 0 0 1 13.09 20M19 2H14V7L12 5.5L10 7V2H9A2 2 0 0 0 7 4V16A2 2 0 0 0 9 18H13.09A6 6 0 0 1 21 13.34V4A2 2 0 0 0 19 2M20 15V18H23V20H20V23H18V20H15V18H18V15Z"
                />
              </svg>
            </span>
            <Link className="nav-item" to="/addbook">
              Add Books
            </Link>
            <hr></hr>
          </ListGroup.Item>
          <ListGroup.Item className="mt-2" style={{ border: "none" }}>
            <span>
              <svg
                className="icon mr-2"
                style={{
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                }}
              >
                <path
                  fill="currentColor"
                  d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                />
              </svg>
            </span>
            <a
              className="nav-item"
              href="#"
              onClick={() =>
                dispatch({
                  type: "LOGOUT",
                })
              }
            >
              Logout
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default SideBar;
