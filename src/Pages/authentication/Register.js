import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";
import "./css/auth.css";
import { Context as AuthContext } from "../../context/AuthContext";
import {DynamicTitle} from '../../component/DynamicTitle';

const Register = () => {
  const {
    state: { loginError, emailError, nameError, loading_button },
    RegisterContext,
  } = useContext(AuthContext);

  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'SignUp',
      metaDescription: 'Sign Up with name, email and password'
    });
  },[]);

  const [registerName, setName] = useState("");
  const [registerEmail, setEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  //// Text Input Fill to button Active
  const [EmailFill, setEmailFill] = useState("");
  const [PassWordFill, setPassWordFill] = useState("");
  const [NameFill, setNameFill] = useState("");

  //onchange email
  const nameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length == 0) {
      setNameFill(false);
    } else {
      setNameFill(true);
    }
  };

  //onchange email
  const emailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length == 0) {
      setEmailFill(false);
    } else {
      setEmailFill(true);
    }
  };
  //onchange password
  const passwordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setPassWordFill(false);
    } else {
      setPassWordFill(true);
    }
  };

  const handleSubmit = (e) => {
    RegisterContext({ registerName, registerEmail, registerPassword });
    e.preventDefault();
  };

  return (
    <div>
      {/* Header Component */}
      <Header active={0} />
      {/* Header Component */}

      <div className="initial-div">
        <div className="before-input">
          <div className="input-div">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
              {/* <form action="#"> */}
              <label className="label-style">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={registerName}
                onChange={nameChange}
                required
                style={nameError ? { border: "1px solid red" } : null}
              />

              <label className="label-style">E-Mail</label>
              <input
                type="email"
                placeholder="E-mail"
                value={registerEmail}
                onChange={emailChange}
                required
                style={emailError ? { border: "1px solid red" } : null}
              />

              <label className="label-style">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={passwordChange}
                min="6"
                required
              />

              <br />
              {loginError ? (
                <span className="Login-Error">{loginError}</span>
              ) : null}
              <br />
              {NameFill && EmailFill && PassWordFill ? (
                <button className="button-style">
                  {loading_button ? (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              ) : (
                <button
                  className="button-style"
                  style={{ backgroundColor: "#999", cursor: "no-drop" }}
                  disabled={true}
                >
                  Sign Up
                </button>
              )}

              <div>
                <Link className="link-style-login" to="/login">
                  Have any account? Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
      {/* Footer Component */}
    </div>
  );
};

export default Register;
