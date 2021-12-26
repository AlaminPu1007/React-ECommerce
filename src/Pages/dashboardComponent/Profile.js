import React,{useEffect} from 'react';
import Header from '../homeComponent/Header';
import Footer from '../homeComponent/Footer';
import './css/styles.css';
import { DynamicTitle } from "../../component/DynamicTitle";

const Profile = () => {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'Profile',
      metaDescription: 'your profile information is here'
    });
  },[]);
  return (
    <div className="blog-container">
      {/* Header Component */}
      <Header />
      {/* Header Component */}
      {/* Main Body Component */}
      <main>Profile Component</main>
      {/* Main Body Component */}
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default Profile;
