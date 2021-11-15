import React, {useState} from "react";
import "./Css/home.css";
import Header from "./homeComponent/Header";
import Body from "./homeComponent/Body";

const Dashboard = () => {
  const [animation, setAnimation] = useState("animation-text");

  const ButtonClick=()=>{
    setAnimation("animation-text2");
  }

  return (
    <div className="container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body */}
      <Body />
      {/* Main Body */}
    </div>
  );
};

export default Dashboard;
