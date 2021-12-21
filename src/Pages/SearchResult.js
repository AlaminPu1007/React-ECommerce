import React, { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import DemoCollection from "../jsonFile/DemoCollection.json";
//define toastify in react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import Header from "./homeComponent/Header";
import Footer from "./homeComponent/Footer";
import "./Css/home.css";

let copyItem = 0;

const SearchResult = () => {
  const navigate = useNavigate();
  const {
    state: { token, cart_error, cart_id, loginError,searchedValue },AddCarListContext
  } = useContext(AuthContext);

  // Method to add product into cart list
  const AddToCartList = (product_id) => {
    if (token) return AddCarListContext({ product_id, token });
    else navigate("/login");
  };


  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchedValue) {
      //without store it inside state, that may case result 0
      setSearch(searchedValue);
    }
  });

  // toastify message
  const cartNotify = () => toast("has been added on your cart list");
  const favNotify = () => toast("has been added on your favorite list"); 

  // Men page navigation
  const NavigateToMen = () => {
    return navigate("/men");
  };
  // WoMen page navigation
  const NavigateToWoMen = () => {
    return navigate("/wo-men");
  };
  // Child page navigation
  const NavigateToChild = () => {
    return navigate("/child");
  };

  return (
    <div className="body-container">
      {/* define toastify at initial point */}
      <ToastContainer className="toast-container" />
      <Header />
      {/* Main Body part start here */}
      <main style={{ position: "relation", padding: "30px 0" }}>
        {/* Search section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Your search results</h1>
          </div>
          <div className="men-initial-container">
            {DemoCollection.filter((val) => {
              if (search == "") {
                return null;
              } else if (
                val.description.toLowerCase().includes(search.toLowerCase())
              ) {
                copyItem = val;
                return val;
              }
            }).map((item, index) => {
              return (
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
              );
            })}
          </div>
          {/* If user search result is not found */}
          {copyItem ? null : <p>No Result if fond!</p>}
        </section>
        {/* Search section */}
      </main>
      {/* Main Body part start here */}
      <Footer />
    </div>
  );
};

export default SearchResult;
