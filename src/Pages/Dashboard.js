import React,{useEffect} from "react";
import "./Css/home.css";
import Header from "./homeComponent/Header";
import Body from "./homeComponent/Body";
import Footer from "./homeComponent/Footer";
import {DynamicTitle} from '../component/DynamicTitle';

const Dashboard = () => {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'E-Commerce site',
      metaDescription: 'E-Commerce site Meta Description'
    });
  },[]);
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
