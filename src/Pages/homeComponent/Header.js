import React, {useState} from "react";
import "../Css/home.css";
//boots strap icon
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  // define state for li text color
  const [liTextColor, setLiTextColor]=useState(1);
  // Li Text Color function
  const LiTextColorFunction=(value)=>{
    setLiTextColor(value);
  };
  return (
    <nav>
      {/* logo with menu bar */}
      <div className="logo-menu">
        {/* Drawer navigation */}
        <div className="drawer">
          <Link className="Main-menu" to="/">
            <FiMenu size={20} />
          </Link>
        </div>
        {/* Drawer navigation */}
        {/* logo */}
        <div className="logo-title">
          <span style={{ fontWeight: "bold", color: "#1a1a18" }}>
            E-Commerce
          </span>{" "}
          <span style={{ color: "#b2b0b0" }}>Templates</span>
        </div>

        {/* logo */}
        {/* Menu  */}
        <div>
          <ul>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(1)}
                  to="/"
                  style={
                    liTextColor === 1
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
                  Home
                </Link>
                <AiFillCaretDown
                  color={liTextColor === 1 ? "#888dc4" : "#6a6867"}
                />
              </div>

              <ul className="sub-menu">
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
              </ul>
            </li>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(2)}
                  to="/"
                  style={
                    liTextColor === 2
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
                  Shop
                </Link>
                <AiFillCaretDown
                  color={liTextColor === 2 ? "#888dc4" : "#6a6867"}
                />
              </div>
              <ul className="sub-menu">
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
                <li>
                  <Link to="/">Sub Item 5</Link>
                </li>
                <li>
                  <Link to="/">Sub Item 6</Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(3)}
                  to="/"
                  style={
                    liTextColor === 3
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
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
            </li>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(4)}
                  to="/"
                  style={
                    liTextColor === 4
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
                  Blog
                </Link>
                {/* <AiFillCaretDown
                    color={liTextColor === 4 ? "#888dc4" : "#6a6867"}
                  /> */}
              </div>
            </li>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(5)}
                  to="/about"
                  style={
                    liTextColor === 5
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
                  About
                </Link>
                {/* <AiFillCaretDown
                    color={liTextColor == 5 ? "#888dc4" : "#6a6867"}
                  /> */}
              </div>
            </li>
            <li className="sub-menu-parent">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  onClick={() => LiTextColorFunction(6)}
                  to="/"
                  style={
                    liTextColor === 6
                      ? { color: "#888dc4" }
                      : { color: "#6a6867" }
                  }
                >
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
        <div className="icon">
          <Link className="icon-view" to="/">
            <input type="text" name="search" placeholder="Search.." />
            <BsSearch color="#33342f" size={20} className="search-icon" />
          </Link>
        </div>

        <div className="icon">
          <Link className="icon-view" to="/">
            <BsFillCartFill color="#33342f" size={18} />
          </Link>
        </div>
        <div className="icon">
          <Link className="icon-view" to="/">
            <MdFavoriteBorder color="#33342f" size={20} />
          </Link>
        </div>
      </div>
      {/* icon div */}
    </nav>
  );
};

export default Header;
