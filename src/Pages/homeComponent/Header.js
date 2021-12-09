import React, { useState, useContext,useRef,useEffect } from "react";
import "../Css/home.css";
//boots strap icon
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import {
  MdFavoriteBorder,
  MdFeaturedPlayList,
  MdPermContactCalendar,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaBloggerB, FaChild } from "react-icons/fa";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiFillHome,
  AiFillExclamationCircle,
  AiOutlineLogin,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import { RiWomenLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Context as AuthContext } from "../../context/AuthContext";
//bring outside click 
// import {DetectOutsideClick} from '../../component/DetectOutsideClick';

const Header = ({ active }) => {
  //detect outside click
  const ref = useRef(null);
  //detect outside click
  const navigate = useNavigate();
  const { SearchedInputValue } = useContext(AuthContext);
  // define state for li text color
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [liTextColor, setLiTextColor] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  // Li Text Color function
  const LiTextColorFunction = (value) => {
    setLiTextColor(value);
  };

  const SearchFunction = (event) => {
    setSearchValue(event.target.value);
  };

  const submittedFunction = () => {
    return searchValue
      ? (SearchedInputValue(searchValue), navigate("/search-result"))
      : null;
  };

  //open/close drawer
  const OpenDrawer = () => setDrawerVisible(!drawerVisible);

  // detect mouse click on outside
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDrawerVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  // detect mouse click on outside

  return (
    <nav ref={ref}>
      <div className="nav-bar">
        {/* logo with menu bar */}
        <div className="logo-menu">
          {/* Drawer navigation */}
          <div className="drawer">
            <div className="Main-menu">
              <FiMenu
                color="#6a6867"
                size={20}
                onClick={OpenDrawer}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          {/* Drawer navigation */}
          {/* logo */}
          <Link to="/" className="logo-title">
            <span style={{ fontWeight: "bold", color: "#1a1a18" }}>
              E-Commerce
            </span>{" "}
            <span style={{ color: "#b2b0b0" }}>Templates</span>
          </Link>

          {/* logo */}
          {/* Menu  */}
          <div className="main-nav-menu">
            <ul>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/">
                    Home
                  </Link>
                  {/* <AiFillCaretDown
                  color={liTextColor === 1 ? "#888dc4" : "#6a6867"}
                /> */}
                </div>

                {/* <ul className="sub-menu">
                <li>
                  <Link to="/">Sub Item 1</Link>
                </li>
                <li>
                  <Link to="/">Sub Item 2</Link>
                </li>
                <li>
                  <Link to="/">Sub Item 3</Link>
                </li>
                <li>
                  <Link to="/">Sub Item 4</Link>
                </li>
              </ul> */}
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/men">
                    Category
                  </Link>
                  <AiFillCaretDown
                    color={liTextColor === 2 ? "#888dc4" : "#6a6867"}
                  />
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/men">Men's</Link>
                  </li>
                  <li>
                    <Link to="/wo-men">Wo Men's</Link>
                  </li>
                  <li>
                    <Link to="/child">Child</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/">
                    Features
                  </Link>
                  <AiFillCaretDown
                    color={liTextColor === 3 ? "#888dc4" : "#6a6867"}
                  />
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Sub Item 1</Link>
                  </li>
                  <li>
                    <Link to="/">Sub Item 2</Link>
                  </li>
                </ul>
              </li> */}
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/blog">
                    Blog
                  </Link>
                  {/* <AiFillCaretDown
                    color={liTextColor === 4 ? "#888dc4" : "#6a6867"}
                  /> */}
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/about">
                    About
                  </Link>
                  {/* <AiFillCaretDown
                    color={liTextColor == 5 ? "#888dc4" : "#6a6867"}
                  /> */}
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/contact">
                    Contact
                  </Link>
                  {/* <AiFillCaretDown
                    color={liTextColor === 6 ? "#888dc4" : "#6a6867"}
                  /> */}
                </div>
              </li>
            </ul>
          </div>
          {/* Menu  */}
        </div>
        {/* logo with menu bar */}

        {/* icon div */}
        <div className="Icons-view">
          {active ? (
            <div className="icon">
              <div className="icon-view">
                <input
                  type="text"
                  name="search"
                  placeholder="Search.."
                  onChange={(event) => {
                    SearchFunction(event);
                  }}
                />
                <BsSearch
                  onClick={submittedFunction}
                  color="#33342f"
                  size={20}
                  className="search-icon"
                />
              </div>
            </div>
          ) : null}

          <div className="icon mobile-hide">
            <Link className="icon-view" to="/login">
              <VscAccount size={20} className="menu-icon " />
            </Link>
          </div>
          <div className="icon tab-hide">
            <Link className="icon-view" to="/cart-list">
              <BsFillCartFill size={20} className="menu-icon " />
            </Link>
          </div>
          <div className="icon tab-hide">
            <Link className="icon-view" to="/favorite-list">
              <MdFavoriteBorder size={22} className="menu-icon " />
            </Link>
          </div>
        </div>
        {/* icon div */}
      </div>
      {/* Drawer navigation */}
      <div
        className={
          drawerVisible ? "drawer-navigation-active" : "drawer-navigation"
        }
      >
        <div className="drawer-close-icon">
          <AiOutlineClose
            size={25}
            color="#FFF"
            onClick={OpenDrawer}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* show drawer menu */}
        <div className="drawer-menu-container">
          <div className="drawer-menu-list">
            <ul>
              <li className="before-drawer-icon-text">
                <Link to="/" className="drawer-icon-text">
                  <AiFillHome color="#FFF" size={22} />
                  <p>Home</p>
                </Link>
              </li>
              <li className="before-drawer-icon-text">
                <Link to="/men" className="drawer-icon-text">
                  <BiCategory color="#FFF" size={22} />
                  <p>Category</p>
                </Link>
              </li>
              {/* category menu sub menu */}
              <div className="category-sub-menu">
                <li className="before-drawer-icon-text-sub">
                  <Link to="/men" className="drawer-icon-text">
                    <GoPerson color="#FFF" size={20} />
                    <p>Men's</p>
                  </Link>
                </li>
                <li className="before-drawer-icon-text-sub">
                  <Link to="/wo-men" className="drawer-icon-text">
                    <RiWomenLine color="#FFF" size={20} />
                    <p>Wo Mens's</p>
                  </Link>
                </li>
                <li className="before-drawer-icon-text-sub">
                  <Link to="/child" className="drawer-icon-text">
                    <FaChild color="#FFF" size={20} />
                    <p>Child</p>
                  </Link>
                </li>
              </div>
              {/* category menu sub menu */}
              {/* <li className="before-drawer-icon-text">
                <Link to="/" className="drawer-icon-text">
                  <MdFeaturedPlayList color="#FFF" size={22} />
                  <p>Features</p>
                </Link>
              </li> */}
              <li className="before-drawer-icon-text">
                <Link to="/blog" className="drawer-icon-text">
                  <FaBloggerB color="#FFF" size={22} />
                  <p>Blog</p>
                </Link>
              </li>
              <li className="before-drawer-icon-text">
                <Link to="/about" className="drawer-icon-text">
                  <AiFillExclamationCircle color="#FFF" size={22} />
                  <p>About</p>
                </Link>
              </li>
              <li className="before-drawer-icon-text">
                <Link to="/contact" className="drawer-icon-text">
                  <MdPermContactCalendar color="#FFF" size={22} />
                  <p>Contact</p>
                </Link>
              </li>
              <li className="before-drawer-icon-text before-drawer-icon-text-login">
                <Link to="/login" className="drawer-icon-text">
                  <AiOutlineLogin color="#FFF" size={22} />
                  <p>Login</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* show drawer menu */}
      </div>
    </nav>
  );
};

export default Header;
