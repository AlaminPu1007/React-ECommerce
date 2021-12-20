import React, { useState, useRef } from "react";
import "../Css/home.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Data from "../../jsonFile/data.json";
import DemoCollection from "../../jsonFile/DemoCollection.json";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
//define toastify in react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(1);

  // making an auto play slider
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === Data.length ? 1 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

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
  const men = DemoCollection
    ? DemoCollection.find((i) => i.category === "men")
    : 0;
  // find men first index value
  const menFirstIndex = DemoCollection
    ? DemoCollection.findIndex((i) => i.id === men.id)
    : 0;

  //find woMen first item
  const woMen = DemoCollection
    ? DemoCollection.find((i) => i.category === "wo-men")
    : 0;
  // find men first index value
  const woMenFirstIndex = DemoCollection
    ? DemoCollection.findIndex((i) => i.id === woMen.id)
    : 0;

  //find Child first item
  const Child = DemoCollection
    ? DemoCollection.find((i) => i.category === "child")
    : 0;
  // find men first index value
  const childFirstIndex = DemoCollection
    ? DemoCollection.findIndex((i) => i.id === Child.id)
    : 0;

  // Header Navigation function
  const HeaderNavigation = (item) => {
    return navigate(item);
  };

  // going to shopping page
  const shopFunction = () => {
    alert("you click on shopping page");
  };
  let some = 0;
  let search = "Foreign";
  // some = DemoCollection.filter((val)=>{
  //   some = val.description.toLowerCase().includes(search.toLowerCase());

  // }).map(i=> console.log(i));

  return (
    <div className="body-container">
      {/* define toastify at initial point */}
      <ToastContainer className="toast-container" />

      {/* header image slider */}
      <div style={{ position: "relative" }}>
        {/* Sliding an image with text */}
        <div className="image-text-container">
          {Data.map((item, index) => {
            return (
              <div
                className={
                  slideIndex === index + 1 ? "image-text-anime" : "image-text"
                }
                key={item.id}
              >
                <div className="text-div">
                  <div className="animation-text-div">
                    <h3>{item.type}</h3>
                    <h1 style={{ margin: "5px 0" }}>{item.arrivals}</h1>
                    <button
                      onClick={() => HeaderNavigation(item.navigation_link)}
                      className="Button"
                    >
                      {item.button_text}
                    </button>
                  </div>
                </div>

                <div className="image-div">
                  <img
                    src={item.image}
                    className="men-image"
                    alt="men-images"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Sliding an image with text */}
        {/* next / previous button icon */}
        <div className="btn-slide">
          <button className="next-button" onClick={() => prevSlide()}>
            <AiOutlineLeft color="#000" size={20} />
          </button>
        </div>
        <div className="btn-slide2">
          <button className="next-button" onClick={() => nextSlide()}>
            <AiOutlineRight color="#000" size={20} />
          </button>
        </div>
        {/* next / previous button icon */}
        <div className="container-dots">
          {Array.from({ length: Data.length }).map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
      {/* header image slider */}
      {/* Main Body part start here */}
      <main style={{ position: "relation", padding: "30px 0 0 0" }}>
        {/* Men section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Men Collection</h1>
          </div>
          <div className="men-initial-container">
            {DemoCollection.map((item, index) => {
              return item.category === "men" ? (
                index < menFirstIndex + 6 ? (
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
                ) : null
              ) : null;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToMen} className="Button more-button">
              more items
            </button>
          </div>
        </section>
        {/* Men section */}
        {/* Wo-Men section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Wo-men Collection</h1>
          </div>
          <div className="men-initial-container">
            {DemoCollection.map((item, index) => {
              return item.category === "wo-men" ? (
                index < woMenFirstIndex + 6 ? (
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
                ) : null
              ) : null;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToWoMen} className="Button more-button">
              more items
            </button>
          </div>
        </section>
        {/* Wo-Men section */}
        {/* Child section */}
        <section className="section-style">
          <div className="category-title">
            <h1>Child Collection</h1>
          </div>
          <div className="men-initial-container">
            {DemoCollection.map((item, index) => {
              return item.category === "child" ? (
                index < childFirstIndex + 6 ? (
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
                ) : null
              ) : null;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={NavigateToChild} className="Button more-button">
              more items
            </button>
          </div>
        </section>
        {/* Child section */}
        <section className="section-style">
          <p>some</p>
          {DemoCollection.filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.description.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          }).map((item, index) => {
            console.log(item,search)
            return (
              <div>
                <p>{item.description}</p>
                <p>some</p>
              </div>
            );
          })}
        </section>
      </main>
      {/* Main Body part start here */}
    </div>
  );
};

export default Body;
