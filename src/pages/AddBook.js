import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import CustomModal from "../components/CustomModal";
import { API } from "../config/api";

const AddBook = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

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
          "Content-Type": "multipart/form-data",
        },
      };

      // set payload
      var formData = new FormData();
      formData.append("title", title);
      formData.append("publication", publication);
      formData.append("categoryId", categoryId);
      formData.append("pages", pages);
      formData.append("ISBN", ISBN);
      formData.append("aboutBook", aboutBook);
      formData.append("file", file);
      formData.append("status", "Waiting to be verified");

      // send body (email and password) to endpoint /login
      const res = await API.post("/book", formData, config);

      console.log(res);
      setMessage(res.data.message);
      setShow(true);
    } catch (err) {
      console.log(err);
      setMessage(err.message);
      setShow(true);
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
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row-sm-3">
              <h4>Add Books</h4>
            </div>
            <div className="row-sm-3">
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
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control-file"
                    name="file"
                    required
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        file: !e.target.files[0] ? file : e.target.files[0],
                      });
                    }}
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
      <CustomModal show={show} onHide={() => setShow(false)}>
        <h5 style={style.popup}>
          {message}.
          {/* <br />
          Your literature is waiting for our administrator approval. This can
          take up to 24 hours. Please check back later. */}
        </h5>
      </CustomModal>
    </div>
  );
};

const style = {
  popup: {
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    color: "white",
    margin: 0,
    textAlign: "center",
  },
};

export default AddBook;
