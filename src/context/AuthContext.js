import createDataContext from "./createDataContext";
import api from "../Api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    // header search input value
    case "searched_value":
      return { ...state, searchedValue: action.payload };
    // store token inside state variable
    case "get_token":
      return { ...state, token: action.payload };
    //store auth login error
    case "Auth_LoginError":
      return { ...state, loginError: action.payload };
    //email error
    case "email_error":
      return { ...state, emailError: action.payload };

    default:
      return state;
  }
};

const Register = (dispatch) => {
  const navigate = useNavigate();
  return async ({ name, email, password }) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log(response, "response\n");

      if (response.data.message === "Account created successfully") {
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: "get_token", payload: response.data.token });
        navigate("/blog");
      } else if (response.data === "This email is already exist") {
        dispatch({ type: "email_error", payload: true });
        dispatch({ type: "Auth_LoginError", payload: response.data });
      } else {
        dispatch({ type: "Auth_LoginError", payload: response.data });
      }
    } catch (err) {
      dispatch({ type: "Auth_LoginError", payload: err.message });
      console.log(err.message);
    }
  };
};

const Login = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      if (response.data.message === "login in successfully") {
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: "get_token", payload: response.data.token });
        // history.push("/");
      } else {
        if (response.data === "This email is already exist") {
          dispatch({ type: "email_error", payload: true });
        }
        dispatch({ type: "get_LoginError", payload: response.data });
      }
    } catch (err) {
      dispatch({ type: "get_LoginError", payload: err.message });
      // console.log(err.message);
    }
  };
};
// from header pages search value
const SearchedInputValue = (dispatch) => {
  return (value) => {
    console.log(value);
    dispatch({ type: "searched_value", payload: value });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,

  {
    //function name
    Login,
    //registration function
    Register,
    //header pages searched input value
    SearchedInputValue,
  },

  {
    //variable name
    token: null,
    searchedValue: "",
    loginError: "",
    emailError: false,
  }
);
