import React, { Component } from "react";
import { ReactReader } from "react-reader";
import { Link } from "react-router-dom";

export default class ReadBook extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar bg-light px-0">
            <Link className="navbar-brand ml-3" to="/">
              <img
                src={require("../images/Logo.svg")}
                style={{ height: "6vh", width: "auto" }}
                alt=""
              ></img>
            </Link>
          </nav>
        </div>
        <div style={{ position: "relative", height: "90%" }}>
          {" "}
          <ReactReader
            url={"/books/harry.epub"}
            title={"Harry Potter"}
            location={"epubcfi(/6/2[cover]!/6)"}
            locationChanged={(epubcifi) => console.log(epubcifi)}
          />
        </div>
      </div>
    );
  }
}

// export default ReadBook;
