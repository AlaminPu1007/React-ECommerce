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

let filtered = [];

const SearchResult = () => {
  const navigate = useNavigate();
  const {
    state: { searchedValue },
  } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchedValue) {
      //without store it inside state, that may case result 0
      setSearch(searchedValue);
      ///filter searched value
      // filtered = DemoCollection.filter((entry) =>
      //   Object.values(entry).some(
      //     (val) => typeof val === "string" && val.includes(search)
      //   )
      // );

      filtered = DemoCollection.filter((value) => {
        return (
          value.description.toLowerCase().match(new RegExp(search, "g")) 
        );
      });
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

  // find men/wo-emn/child first element index position

  //find men first item
  //const men = filtered ? filtered.find((i) => i.category === "men") : 0;
  // find men first index value
  // const menFirstIndex = filtered
  //   ? filtered.findIndex((i) => i.id === men.id)
  //   : 0;

  //find woMen first item
  // const woMen = filtered ? filtered.find((i) => i.category === "wo-men") : 0;
  // find men first index value
  // const woMenFirstIndex = filtered
  //   ? filtered.findIndex((i) => i.id === woMen.id)
  //   : 0;

  //find Child first item
  //const Child = filtered ? filtered.find((i) => i.category === "child") : 0;
  // find men first index value
  // const childFirstIndex = filtered
  //   ? filtered.findIndex((i) => i.id === Child.id)
  //   : 0;

  return (
    <div>
      {/* define toastify at initial point */}
      <ToastContainer />
      <Header />
      <p>
        your search result page here! {searchedValue} {filtered.length}
      </p>
      {/* Main Body part start here */}
      <main style={{ position: "relation", padding: "30px 0 0 0" }}>
        {/* Men section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Men Collection</h1>
          </div>
          <div className="men-initial-container">
            {filtered.length ? (
              filtered.map((item, index) => {
                return item.category === "men" ? (
                  // index < menFirstIndex + 6 ? (
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
                            onClick={cartNotify}
                          />
                          <MdFavorite
                            color="#487ab1"
                            size={30}
                            className="fav-icon"
                            onClick={favNotify}
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
                  </div>
                ) : //) : null
                null;
              })
            ) : (
              <div>
                <p>no result is found</p>
              </div>
            )}
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToMen} className="Button more-button">
              more items
            </button>
          </div> */}
        </section>
        {/* Men section */}
        {/* Wo-Men section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Wo-men Collection</h1>
          </div>
          <div className="men-initial-container">
            {filtered.length ? (
              filtered.map((item, index) => {
                return item.category === "wo-men" ? (
                  //index < woMenFirstIndex + 6 ? (
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
                            onClick={cartNotify}
                          />
                          <MdFavorite
                            color="#487ab1"
                            size={30}
                            className="fav-icon"
                            onClick={favNotify}
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
                  </div>
                ) : // ) : null
                null;
              })
            ) : (
              <div>
                <p>no result is found</p>
              </div>
            )}
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToWoMen} className="Button more-button">
              more items
            </button>
          </div> */}
        </section>
        {/* Wo-Men section */}
        {/* Child section */}
        <section className="section-style" style={{ paddingBottom: "2%" }}>
          <div className="category-title">
            <h1>Child Collection</h1>
          </div>
          <div className="men-initial-container">
            {filtered.length ? (
              filtered.map((item, index) => {
                return item.category === "child" ? (
                  // index < childFirstIndex + 6 ? (
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
                            onClick={cartNotify}
                          />
                          <MdFavorite
                            color="#487ab1"
                            size={30}
                            className="fav-icon"
                            onClick={favNotify}
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
                  </div>
                ) : //) : null
                null;
              })
            ) : (
              <div>
                <p>no result is found</p>
              </div>
            )}
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToChild} className="Button more-button">
              more items
            </button>
          </div> */}
        </section>
        {/* Child section */}
      </main>
      {/* Main Body part start here */}
      <Footer />
    </div>
  );
};

export default SearchResult;