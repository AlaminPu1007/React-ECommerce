import React, { useState, useRef } from "react";
import "../Css/home.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Data from "../../jsonFile/data.json";
import Collection from "../../jsonFile/collection.json";
import {  BsFillCartFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

const Body = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // making an auto play slider
  const timeoutRef = React.useRef(null);

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

  // add to Cart list function
  const addToCarList = () => {
    alert("you clicked on add to cart list");
  };
  // add to Favorite list function
  const addToFavList = () => {
    alert("you clicked on add to Fav list");
  };

  return (
    <div style={{ paddingBottom: "20px", position: "relative" }}>
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
                    <button className="Button">{item.button_text}</button>
                  </div>
                </div>

                <div className="image-div">
                  <img src={item.image} className="men-image" />
                </div>
              </div>
            );
          }).reverse()}
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
          <div className="men-initial-container">
            {Collection[0].map((item, index) => {
              return (
                <div className="men-containers">
                  <div className="men-container">
                    <div className="image-icon">
                      <img
                        src={item.image}
                        alt="image"
                        className="men-image-style"
                      />
                      <div className="icon-style">
                        <BsFillCartFill
                          color="#719ece"
                          size={28}
                          className="cart-icon"
                          onClick={addToCarList}
                        />
                        <MdFavoriteBorder
                          color="#719ece"
                          size={30}
                          className="fav-icon"
                          onClick={addToFavList}
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
                      <button className="Button">Shop now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Men section */}
      </main>
      {/* Main Body part start here */}
    </div>
  );
};

export default Body;