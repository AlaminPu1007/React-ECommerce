import React, {useEffect} from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';
import { DynamicTitle } from "../../component/DynamicTitle";

const Contact = () => {
   // Set Page title and meta data
   useEffect(()=>{
    DynamicTitle({
      title: 'Contact',
      metaDescription: 'Contact with our team'
    });
  },[]);
  return (
    <div className="blog-container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body Component */}
      <main>Contact Component</main>
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default Contact;
