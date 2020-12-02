import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../config/api";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        // fetching data from endpoint
        if (id) {
          const res = await API.get(`/books/${id}`);
          setBooks(res.data.data.books);
        } else {
          const res = await API.get("/books");
          setBooks(res.data.data.books);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  //   console.log(books);

  return (
    <div>
      <div className="row">
        {/* Card for Books */}
        {loading || !books ? (
          <h3>Loading . . .</h3>
        ) : (
          books.map((book) => (
            <div className="col-sm-3  my-2">
              <div className="card" style={{ border: "none" }}>
                <Link to={`/bookdetail/${book.id}`} style={{ color: "black" }}>
                  <img
                    className="card-img-top"
                    alt="..."
                    src={require("../images/book.jpg")}
                    style={{
                      width: "10.2rem",
                      height: "16rem",
                      objectFit: "cover",
                    }}
                  ></img>
                  <h5 className="card-title py-2">{book.title}</h5>
                </Link>
                {book.authors.map((author) => (
                  <p className="card-text subtitle">{author.fullName}</p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
