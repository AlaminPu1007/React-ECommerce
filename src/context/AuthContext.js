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
    //name error
    case "name_error":
      return { ...state, nameError: action.payload };
    //clear all registration method
    case "clear_Registration_Error":
      return { ...state, nameError: false, emailError: false };
    // Store token value
    case "Store_Token":
      return { ...state, token: action.payload };
    // Define loading or not
    case 'loading_spinner': 
      return {...state, loading_button: action.payload};

    default:
      return state;
  }
};

const AutomaticSignIn = (dispatch) => {
  const navigate = useNavigate();
  return () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
      dispatch({ type: "Store_Token", payload: token });
    } else {
      navigate("/login");
      dispatch({ type: "Store_Token", payload: "" });
    }
  };
};

const clearRegistrationError = (dispatch) => {
  return () => {
    dispatch({ type: "clear_Registration_Error" });
  };
};

const RegisterContext = (dispatch) => {
  // This method can help to navigate another page after create account successfully
  const navigate = useNavigate();
  return async ({ registerName, registerEmail, registerPassword }) => {
    //Remove space from first and last
    const name = registerName.trim();
    const email = registerEmail;
    const password = registerPassword;

    //loading a button
    dispatch({ type: "loading_spinner", payload: true });

    // Clear all error whenever user try to registration
    dispatch({ type: "clear_Registration_Error" });

    try {
     
      const response = await api.post("/users/register", {
        name,
        email,
        password,
      });

      if (response.data.message === "Account created successfully") {
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: "get_token", payload: response.data.token });
        navigate("/login");
      } else if (response.data === "This email is already exist") {
        dispatch({ type: "email_error", payload: true });
        dispatch({ type: "Auth_LoginError", payload: response.data });
      } else if (
        response.data === `"name" length must be at least 3 characters long`
      ) {
        dispatch({ type: "name_error", payload: true });
        dispatch({ type: "Auth_LoginError", payload: "Name is to short" });
      } else {
        dispatch({ type: "Auth_LoginError", payload: response.data });
      }
      dispatch({ type: "loading_spinner", payload: false });
    } catch (err) {
      dispatch({ type: "Auth_LoginError", payload: err.message });
      dispatch({ type: "loading_spinner", payload: false });
      // console.log(err.message);
    }
  };
};

const LoginContext = (dispatch) => {
  const navigate = useNavigate();
  return async ({ email, password }) => {
    //loading a button
    dispatch({ type: "loading_spinner", payload: true });

    // Clear all error whenever user try to registration
    dispatch({ type: "clear_Registration_Error" });
    try {
      const response = await api.post("/users/signin", { email, password });

      if (response.data.message === "login successfully") {
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: "get_token", payload: response.data.token });
        navigate("/");
      } else {
        dispatch({ type: "Auth_LoginError", payload: response.data });
      }
      dispatch({ type: "loading_spinner", payload: false });
    } catch (err) {
      dispatch({ type: "get_LoginError", payload: err.message });
      dispatch({ type: "loading_spinner", payload: false });
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
    LoginContext,
    //registration function
    RegisterContext,
    //header pages searched input value
    SearchedInputValue,
    //check usr is logged or not
    AutomaticSignIn,
  },

  {
    //variable name
    token: null,
    searchedValue: "",
    loginError: "",
    emailError: false,
    nameError: false,
    loading_button: false,
  }
);
