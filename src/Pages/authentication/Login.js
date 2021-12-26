import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";
import "./css/auth.css";
import { Context as AuthContext } from "../../context/AuthContext";
import {DynamicTitle} from '../../component/DynamicTitle';

const Login = () => {
  const {
    state: { loginError, loading_button },
    LoginContext,
  } = useContext(AuthContext);

  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'Sign In',
      metaDescription: 'Sign in with email and password'
    });
  },[]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //// Text Input Fill to button Active
  const [EmailFill, setEmailFill] = useState("");
  const [PassWordFill, setPassWordFill] = useState("");

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
    LoginContext({ email, password });
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
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
              {/* <form action="#"> */}
              <label className="label-style">E-Mail</label>
              <input
                placeholder="Email"
                value={email}
                onChange={emailChange}
                type="email"
                required
              />

              <label className="label-style">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordChange}
                min="6"
                required
              />
              {loginError ? (
                <span className="Login-Error">{loginError}</span>
              ) : null}
              <br />
              <div className="forget-password">
                <Link to="/forget">Forget password?</Link>
              </div>
              {EmailFill && PassWordFill ? (
                <button className="button-style">Sign In</button>
              ) : (
                <button
                  className="button-style"
                  style={{ backgroundColor: "#999", cursor: "no-drop" }}
                  disabled={true}
                >
                  {loading_button ? (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  ) : (
                    "Sign In"
                  )}
                </button>
              )}

              <div>
                <br />
                <Link className="link-style-login" to="/register">
                  Haven't any account? sign up
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

export default Login;
