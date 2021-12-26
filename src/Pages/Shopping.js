import React, { useState, useEffect } from "react";
import "./shoppingComponent/shop.css";
import { Link, useParams } from "react-router-dom";
import DemoCollection from "../jsonFile/DemoCollection.json";
import Header from "./homeComponent/Header";
import Footer from "./homeComponent/Footer"; 
import {DynamicTitle} from '../component/DynamicTitle';

const Shopping = () => {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'Shop now',
      metaDescription: 'Shop your product now'
    });
  },[]);

  let { id } = useParams();
  const product = id ? DemoCollection.find((i) => i.id === id) : 0;

  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState("Choose");

  // onClick function going here
  const inCrease = () => {
    return count < 2 ? setCount(count + 1) : null;
  };
  const deCrease = () => {
    return count > 1 ? setCount(count - 1) : null;
  };

  //selected on changed function
  const handleSelect = (event) => {
    return setSelected(event.target.value)
  };

  if (!product) {
    return <h1>your given is not valid</h1>;
  }
  return (
    <div className="shop-container">
      {/* Header Component */}
      <Header active={0} />
      {/* Header Component */}
      {/* Main body */}
      <main>
        {/* image div */}
        <div className="shop-image-div">
          <img src={product.image} alt="product image" />
        </div>
        {/* image div */}
        {/* product details div */}
        <div className="shop-details-container">
          <div className="shop-details">
            <p className="product-title">{product.description}</p>
            <p>- In Stock</p>
            <p>- Free delivery available*</p>
            <p>
              - Availability:
              <span style={{ color: "#03AA67" }}> In Stock</span>
            </p>
            <p className="product-price">Price: {product.price}</p>
            <hr />
            <br />
            <br />
            {/* select option  */}
            <label for="cars">
              <h4>size :</h4>
            </label>
            <div class="custom-select">
              <select
                value={selected}
                id="cars"
                onChange={(event) => {
                  handleSelect(event);
                }}
              >
                <option value="Choose">Choose an option</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            {/* select option  */}
            <br />
            {/* order now */}
            <div className="order-number">
              <div className="increase-decrease">
                <p className="increase-order" onClick={deCrease}>
                  -
                </p>
                <p>{count}</p>
                <p className="increase-order" onClick={inCrease}>
                  +
                </p>
              </div>

              {selected === "Choose" ? (
                <button className="order-button-deActive" disabled>
                  {" "}
                  shop now
                </button>
              ) : (
                <Link to={`/order/${product.id}`} className="order-button">
                  {" "}
                  shop now
                </Link>
              )}
            </div>
            {/* order now */}
          </div>
        </div>
        {/* product details div */}
      </main>
      {/* Main body */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default Shopping;
