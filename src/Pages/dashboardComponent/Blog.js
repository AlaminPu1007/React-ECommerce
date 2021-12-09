import React from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';

const Blog=()=> {
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