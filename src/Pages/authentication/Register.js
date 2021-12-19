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

const Register = () => {
  const {
    state: { loginError, emailError },
    Register,
  } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onchange email
  const nameChange = (event) => {
    setName(event.target.value);
  };

  //onchange email
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  //onchange password
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    Register({ name, email, password });
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
                value={name}
                onChange={nameChange}
                required
              />

              <label className="label-style">E-Mail</label>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={emailChange}
                required
                style={emailError ? { border: "1px solid red" } : null}
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

              <br />
              {loginError ? (
                <span className="Login-Error">{loginError}</span>
              ) : null}
              <br />
              <button className="button-style">Sign Up</button>
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
