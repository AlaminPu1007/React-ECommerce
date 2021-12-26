import React, {useEffect} from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';
import { DynamicTitle } from '../../component/DynamicTitle';

const About = () => {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'About',
      metaDescription: 'E-commerce about'
    });
  },[]);
  return (
    <div className="blog-container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body Component */}
      <main>About Component</main>
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default About;
