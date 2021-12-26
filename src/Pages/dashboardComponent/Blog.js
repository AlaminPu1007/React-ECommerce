import React,{useEffect} from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';
import { DynamicTitle } from '../../component/DynamicTitle';

const Blog=()=> {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'Blog',
      metaDescription: 'E-Commerce Blog'
    });
  },[]);
  return (
    <div className="blog-container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body Component */}
      <main>Blog Component</main>
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
}

export default Blog;
