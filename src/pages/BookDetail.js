import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import SideBar from "../components/SideBar";
import { Link, useParams } from "react-router-dom";
import { API } from "../config/api";

const BookDetail = () => {
  const [state, dispatch] = useContext(CartContext);
  const [book, setBook] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);

        // fetching data from endpoint
        const res = await API.get(`/book/${id}`);
        setBook(res.data.data.book);
        setAuthors(res.data.data.book.authors);
        setCategory(res.data.data.book.category);
        console.log(res.data.data.book);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadBook();
  }, []);

  const handleAdd = (id) => {
    const res = API.post(`/add-collection/${id}`);
  };

  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="d-flex flex-row" style={{ height: "400px" }}>
              <div className="d-flex flex-column">
                <img
                  src={require("../images/book.jpg")}
                  style={{
                    height: "400px",
                    textAlign: "center",
                    borderRadius: "8px",
                  }}
                ></img>
              </div>
              <div
                className="d-flex flex-column justify-content-between pl-4"
                style={{ height: "100%" }}
              >
                <div>
                  <h3>{book.title}</h3>
                  {authors.map((author) => (
                    <p className="subtitle">{author.fullName}</p>
                  ))}
                </div>
                <div>
                  <h6>Publication date</h6>
                  <p className="subtitle">{book.publication}</p>
                </div>
                <div>
                  <h6>Category</h6>
                  <p className="subtitle">{category.name}</p>
                </div>
                <div>
                  <h6>Pages</h6>
                  <p className="subtitle">{book.pages}</p>
                </div>
                <div>
                  <h6 style={{ color: "red" }}>ISBN</h6>
                  <p className="subtitle">{book.ISBN}</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <article>
                <h4>About This Book</h4>
                <p className="subtitle">{book.aboutBook}</p>
              </article>
            </div>
            <div class="d-flex flex-row-reverse">
              <Link to="/readbook">
                <button className="Button-g">Read Book</button>
              </Link>
              <button
                className="Button-o mr-1"
                onClick={() => handleAdd(book.id)}
              >
                Add Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
