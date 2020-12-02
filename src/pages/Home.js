import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import BookList from "../components/BookList";
import { API } from "../config/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);

        // fetching data from endpoint
        const res = await API.get("/category");
        setCategories(res.data.data.categories);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const loadFilter = async () => {
      try {
        setLoading(true);

        if (category) {
          const res = await API.get(`/books/${category}`);
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
    loadFilter();
  }, [category]);

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          {/* Grid 3 untuk Side Bar */}
          <div className="col-sm-3">
            <SideBar />
          </div>

          {/* Grid 9 untuk konten */}
          <div className="col-sm-9">
            <div className="row">
              <div
                className="jumbotron"
                style={{ padding: "0", background: "#E6F2FD", width: "100%" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 pt-3 py-5">
                      <h1 className="jumbo">
                        Share, read, and <i>love</i>
                      </h1>
                      <p className="lead">Reading is fascinating</p>
                    </div>
                    <div className="col-sm-4 pt-3 py-5">
                      <img
                        src={require("../images/FixYou.svg")}
                        style={{
                          height: "300px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="mr-auto">
                <h3>List Book</h3>
              </div>
              <div className="ml-auto">
                <form>
                  <div className="form-group">
                    <select
                      className="select-category"
                      id="categorySelection"
                      name="category"
                      // value={category}
                      onChange={handleClick}
                    >
                      {loading || !categories ? (
                        <option>Default</option>
                      ) : (
                        categories.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                      )}
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="row">
                  {/* Card for Books */}
                  {loading || !books ? (
                    <h5>Please wait for a moment.</h5>
                  ) : (
                    books.map((book) => (
                      <div className="col-sm-3  my-2">
                        <div className="card" style={{ border: "none" }}>
                          <Link
                            to={`/bookdetail/${book.id}`}
                            style={{ color: "black" }}
                          >
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
                          {/* {book.authors.map((author) => (
                            <p className="card-text subtitle">
                              {author.fullName}
                            </p>
                          ))} */}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
