import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";
import "./css/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onchange email
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  //onchange password
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    alert("your form is submitted!");
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
              {/* {loginError ? <span className="Login-Error">{loginError}</span> : null} */}
              <br />
              <div className="forget-password">
                <Link to="/forget">Forget password?</Link>
              </div>
              <button className="button-style">Sign In</button>

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
