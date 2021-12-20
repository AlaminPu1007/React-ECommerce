import React, { useContext } from "react";
import {
  AiFillMail,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillUnlock,
} from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook, BsPersonPlus } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "../Css/home.css";
import { Context as AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const {
    state: { token },
    LogOutContext,
  } = useContext(AuthContext);
  // Log out function
  const LogOutFunction = () => {
    LogOutContext();
  };
  return (
    <footer>
      <section>
        <div className="footer-sections">
          <div className="footer-section">
            <h1>Contact Us</h1>
            <a href="mailto:support@ecommerce.com">
              <AiFillMail size={20} className="footer-icon" />
              <p>support@ecommerce.com</p>
            </a>
            <a href="tel:555-555-5555">
              <BsFillTelephoneFill size={20} className="footer-icon" />
              <p>+880 19-86221266</p>
            </a>
            <a
              href="http://maps.google.com/?q=1200 Mirpur-1, Dhaka-1216"
              target="_blank"
            >
              <MdLocationOn size={22} className="footer-icon" />
              <p>Mirpur-1, Dhaka-1216</p>
            </a>
          </div>
          <div className="footer-section">
            <h1>Follow us on</h1>
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook size={22} className="footer-icon" />
              <p>Facebook</p>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <AiFillTwitterCircle size={25} className="footer-icon" />
              <p>Twitter</p>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <AiFillInstagram size={25} className="footer-icon" />
              <p>Instagram</p>
            </a>
          </div>
          <div className="footer-section">
            <h1>My Account</h1>

            {token ? (
              <Link to="/login" onClick={LogOutFunction}>
                <VscAccount size={22} className="footer-icon" />
                <p>Log Out</p>
              </Link>
            ) : (
              <Link to="/login">
                <VscAccount size={22} className="footer-icon" />
                <p>Login</p>
              </Link>
            )}
            {token ? (
              <Link to="/profile">
                <BsPersonPlus size={25} className="footer-icon" />
                <p>Profile</p>
              </Link>
            ) : (
              <Link to="/register">
                <BsPersonPlus size={25} className="footer-icon" />
                <p>Register a account</p>
              </Link>
            )}

            {token ? (
              <Link to="/forget">
                <AiFillUnlock size={25} className="footer-icon" />
                <p>Forget password</p>
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
