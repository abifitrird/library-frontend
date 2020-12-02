import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../config/api";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        // fetching data from endpoint
        const res = await API.get("/mybooks");
        setBooks(res.data.data.creation);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  // console.log(books);

  return (
    <div>
      <div className="row">
        {/* Card for Books */}
        {loading || !books ? (
          <h3>Loading . . .</h3>
        ) : (
          books.map((item) => (
            <div className="col-sm-3  my-2">
              <div className="card" style={{ border: "none" }}>
                <Link to={`/bookdetail/${item.id}`} style={{ color: "black" }}>
                  <img
                    className="card-img-top"
                    alt="..."
                    src={require("../images/book.jpg")}
                  ></img>
                  <h5 className="card-title py-2">{item.title}</h5>

                  {/* {item.authors.map((author) => (
                  <p className="card-text subtitle">{author.fullName}</p>
                ))} */}
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBooks;
