import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { Link, useParams } from "react-router-dom";
import { API } from "../config/api";

const MyLibrary = () => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCollection = async () => {
      try {
        setLoading(true);

        // fetching data from endpoint
        const res = await API.get("/collections");
        setCollection(res.data.data.collection);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadCollection();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row">
              {/* Card for Books */}
              {loading || !collection ? (
                <h3>Loading . . .</h3>
              ) : (
                collection.map((item) => (
                  <div className="col-sm-3  my-2">
                    <div className="card" style={{ border: "none" }}>
                      <Link
                        to={`/bookdetail/${item.id}`}
                        style={{ color: "black" }}
                      >
                        <img
                          className="card-img-top"
                          alt="..."
                          src={require("../images/book.jpg")}
                        ></img>
                        <h5 className="card-title py-2">{item.title}</h5>

                        {/* {item.authors.map((author) => ( */}
                        <p className="card-text subtitle">{item.author}</p>
                        {/* ))} */}
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
