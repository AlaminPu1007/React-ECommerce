import React, {useContext, useEffect } from "react";
import "../Css/home.css";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";
import "./css/styles.css";
import { Context as AuthContext } from "../../context/AuthContext";
//define toastify in react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "./cartListComponent/CartItem";

const CarList = () => {
  const {
    state: { carList, success_message, token },
    getAllCarList,
  } = useContext(AuthContext);
  // show user success message whenever they add product to their cart/favorite list
  useEffect(() => {
    getAllCarList(token);

    if (success_message) {
      toast(success_message);
    }
  }, [success_message]);

  return (
    <div className="body-container">
      {/* define toastify at initial point */}
      <ToastContainer className="toast-container" />
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      <main style={{ position: "relation", padding: "30px 0" }}>
        <section className="section-style">
          <div className="category-title"></div>
          <div className="men-initial-container">
            {carList ? (
              carList.map((item, index) => {
                return <CartItem key={item.id} id={item.product_id} />;
              })
            ) : (
              <p>No cart list is found!</p>
            )}
          </div>
        </section>
      </main>
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default CarList;
