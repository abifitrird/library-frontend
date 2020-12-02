import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { API } from "../config/api";

const AddBookAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  // Membuat state untuk menampung data sementara
  const [formData, setFormData] = useState({
    title: "",
    publication: "",
    categoryId: "",
    pages: "",
    ISBN: "",
    aboutBook: "",
    file: "",
    status: "Waiting to be verified",
  });

  // Destruct element formData menjadi masing-masing key
  const {
    title,
    publication,
    categoryId,
    pages,
    ISBN,
    aboutBook,
    file,
    status,
  } = formData;

  // Fungsi dari event yang dibuat untuk menghandle perubahan pada field input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle penampungan data
  const handleStore = async (e) => {
    e.preventDefault();

    try {
      const config = {
        // set header to define format data
        headers: {
          "Content-Type": "application/json",
        },
      };

      // set payload
      const body = JSON.stringify({
        title,
        publication,
        categoryId,
        pages,
        ISBN,
        aboutBook,
        file,
        status,
      });

      // send body (email and password) to endpoint /login
      const res = await API.post("/book", body, config);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // get categories data from API
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

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <form onSubmit={(e) => handleStore(e)}>
              <div className="form-group">
                <input
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  placeholder="Publication Date"
                  name="publication"
                  value={publication}
                  onChange={(e) => handleChange(e)}
                  type="date"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group">
                <select
                  className="form-control"
                  name="categoryId"
                  value={categoryId}
                  onChange={(e) => handleChange(e)}
                >
                  {loading || !categories ? (
                    <option>Default</option>
                  ) : (
                    // <option defaultValue disabled value="">
                    //       Category
                    // </option>
                    categories.map((category) => (
                      <option value={category.id}>{category.name}</option>
                    ))
                  )}
                </select>
              </div>
              <div className="form-group">
                <input
                  placeholder="Pages"
                  name="pages"
                  value={pages}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  placeholder="ISBN"
                  name="ISBN"
                  value={ISBN}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="7"
                  placeholder="About This Book"
                  name="aboutBook"
                  value={aboutBook}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  name="file"
                  value={file}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button type="submit" className="Button-o float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookAdmin;
