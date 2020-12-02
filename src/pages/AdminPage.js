import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";
import { API } from "../config/api";

const AdminPage = () => {
  const [state, dispatch] = useContext(CartContext);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);

        // fetching data from endpoint
        const res = await API.get(`/books`);
        setBooks(res.data.data.books);
        setAuthors(res.data.data.book.authors);
        console.log(res.data.data.books);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadBook();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <NavBar />
          </div>
        </div>

        <div className="row my-2">
          <h3>Book verification</h3>
        </div>

        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                {/* <th scope="col">User or Author</th> */}
                <th scope="col">ISBN</th>
                <th scope="col">E-book</th>
                <th scope="col">Status Payment</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading || !books ? (
                <tr>
                  <th style={{ textAlign: "center" }}>
                    Loading Book Data . . .
                  </th>
                </tr>
              ) : (
                books.map((book, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{book.title}</td>
                    {/* <td>
                      {authors.map((author) => (
                        <p>{author.id}</p>
                      ))}
                    </td> */}
                    <td>{book.ISBN}</td>
                    <td>{book.file}</td>
                    <td>{book.status}</td>
                    <td style={{ textAlign: "center" }}>
                      <button className="btn btn-danger mx-1">Cancel</button>
                      <button className="btn btn-success mx-1">Approve</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
