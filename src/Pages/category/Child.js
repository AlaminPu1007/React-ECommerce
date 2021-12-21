import React, { useEffect, useState, useContext } from "react";
import DemoCollection from "../../jsonFile/DemoCollection.json";
import { Link, useNavigate } from "react-router-dom";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../Css/home.css";
import { Context as AuthContext } from "../../context/AuthContext";
//define toastify in react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Child = () => {
  const navigate = useNavigate();
  const {
    state: { token, cart_error, cart_id, loginError },
    AddCarListContext,
  } = useContext(AuthContext);

  // Method to add product into cart list
  const AddToCartList = (product_id) => {
    if (token) return AddCarListContext({ product_id, token });
    else navigate("/login");
  };

  ///pagination useState
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const menFilterData = [];
  for (var i = 0; i < DemoCollection.length; i++) {
    if (DemoCollection[i].category === "child") {
      menFilterData.push(DemoCollection[i]);
    }
  }

  ///this is the array need to be render
  const currentPosts = menFilterData
    ? menFilterData.slice(indexOfFirstPost, indexOfLastPost)
    : 0;

  ///start pagination screen here
  const totalPosts = menFilterData.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const [pageLength, setPagelength] = useState(pageNumbers.length);

  useEffect(() => {
    setPagelength(pageNumbers.length);
  }, [pageNumbers.length]);

  const CounterFunction = (type) => {
    setPagelength(pageNumbers.length);
    if (type === "Increase") {
      if (currentPage >= 1 && currentPage < pageNumbers.length) {
        return setCurrentPage(currentPage + 1);
      }
    } else if (type === "decrease") {
      if (currentPage > 1 && currentPage <= pageNumbers.length) {
        return setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="body-container">
      {/* added tesify toast */}
      <ToastContainer className="toast-container" />
      {/* added tesify toast */}
      {/* Header Area */}
      <Header />
      {/* Header Area */}
      <main style={{ paddingBottom: "30px" }}>
        <section className="section-style">
          <div className="category-title">
            <h1>Men Collection</h1>
          </div>
          <div className="men-initial-container">
            {currentPosts.map((item, index) => {
              return item.category === "child" ? (
                <div key={item.id} className="men-containers">
                  <div className="men-container">
                    <div className="image-icon">
                      <img
                        src={item.image}
                        alt="image"
                        className="men-image-style"
                      />
                      <div className="icon-style">
                        <BsFillCartFill
                          color="#487ab1"
                          size={28}
                          className="cart-icon"
                          onClick={() => {
                            AddToCartList(item.id);
                          }}
                        />
                        <MdFavorite
                          color="#487ab1"
                          size={30}
                          className="fav-icon"
                          onClick={() => {
                            AddToCartList(item.id);
                          }}
                        />
                      </div>
                    </div>

                    <h3>{item.description}</h3>
                    <p>Rating: {item.rating}</p>
                    <p>Price: {item.price}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={`/shop/${item.id}`}
                        className="Button shop-now-button"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                  {cart_error ? (
                    item.id === cart_id ? (
                      <p style={{ color: "red", marginBottom: "20px" }}>
                        {cart_error}
                      </p>
                    ) : null
                  ) : null}
                  {loginError ? (
                    <p style={{ color: "red", marginBottom: "20px" }}>
                      {loginError}
                    </p>
                  ) : null}
                </div>
              ) : null;
            })}
          </div>
          <div className="pagination-container">
            <AiOutlineLeft
              size={25}
              style={{ marginRight: "10px" }}
              onClick={() => {
                CounterFunction("decrease");
              }}
              className="pagination-icon"
            />
            <h4>
              {currentPage} of {pageLength}
            </h4>
            <AiOutlineRight
              className="pagination-icon"
              style={{ marginLeft: "10px" }}
              size={25}
              onClick={() => {
                CounterFunction("Increase");
              }}
            />
          </div>
        </section>
      </main>
      {/* Footer Area */}
      <Footer />
      {/* Footer Area */}
    </div>
  );
};

export default Child;
