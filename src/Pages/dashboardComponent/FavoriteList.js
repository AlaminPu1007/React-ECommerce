import React,{useEffect} from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';
import { DynamicTitle } from "../../component/DynamicTitle";

const FavoriteList = () => {
   // Set Page title and meta data
   useEffect(()=>{
    DynamicTitle({
      title: 'Favorite list',
      metaDescription: 'Your favorite list here'
    });
  },[]);
  return (
    <div className="blog-container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body Component */}
      <main>Favorite List Component</main>
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default FavoriteList;
