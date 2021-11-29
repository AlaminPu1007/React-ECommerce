import React, { useState } from "react";
import "./Css/home.css";
import Header from "./homeComponent/Header";
import Body from "./homeComponent/Body";
import Footer from "./homeComponent/Footer";

const Dashboard = () => {
  const [animation, setAnimation] = useState("animation-text");

  const ButtonClick = () => {
    setAnimation("animation-text2");
  };

  return (
    <div className="container">
      {/* Header Component */}
      <Header active={1} />
      {/* Header Component */}
      {/* Main Body Component */}
      <Body />
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default Dashboard;
