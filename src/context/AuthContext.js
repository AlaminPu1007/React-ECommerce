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
      return {
        ...state,
        nameError: false,
        emailError: false,
        cart_error: "",
        cart_id: "",
      };
    // Store token value
    case "Store_Token":
      return { ...state, token: action.payload };
    // Define loading or not
    case "loading_spinner":
      return { ...state, loading_button: action.payload };
    //Success message to show user
    case "success_message":
      return { ...state, success_message: action.payload };
    //Store cart list whenever user add to them
    case "Cart_Error":
      return { ...state, cart_error: action.payload, cart_id: action.payload2 };
    //  Store all cart list
    case "get_CarList":
      return { ...state, carList: action.payload };

    default:
      return state;
  }
};

const AutomaticSignIn = (dispatch) => {
  // const navigate = useNavigate();
  return () => {
    dispatch({ type: "loading_spinner", payload: true });
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "Store_Token", payload: token });
      dispatch({ type: "loading_spinner", payload: false });
    } else {
      dispatch({ type: "Store_Token", payload: "" });
      dispatch({ type: "loading_spinner", payload: false });
    }
  };
};

const LogOutContext = (dispatch) => {
  const navigate = useNavigate();
  return () => {
    const token = localStorage.removeItem("token");
    dispatch({ type: "Store_Token", payload: token });
    navigate("/");
  };
};

const clearError = (dispatch) => {
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
    dispatch({ type: "searched_value", payload: value });
  };
};

// Add To Cart And Favorite list
const AddCarListContext = (dispatch) => {
  const navigate = useNavigate();
  return async ({ token, product_id }) => {
    // Clear all error whenever user try to registration
    dispatch({ type: "clear_Registration_Error" });
    //user id will get from backend
    const user_id = null;
    // Method to fetch data form backend server
    axios({
      method: "post",
      url: `http://localhost:5000/api/users/create-products`,
      headers: {
        "x-auth-token": token,
      },
      data: { product_id, user_id },
    })
      .then((response) => {

        if (response.data === "your product has been created successfully") {
          dispatch({
            type: "success_message",
            payload: "Has been added successfully",
          });
          // user need to visit add to cart list
          navigate("/cart-list");
          dispatch({ type: "success_message", payload: "" });
        } 
        else if(response.data === "This product is already exists!") {
          dispatch({
            type: "Cart_Error",
            payload: response.data,
            payload2: product_id,
          });
        }
      })
      .catch((err) => {
        dispatch({ type: "Auth_LoginError", payload: err.message });
      });
  };
};
// get all product from logged user
const getAllCarList = (dispatch) => {
  return (token) => {
    // Method to fetch data form backend server
    axios({
      method: "get",
      url: `http://localhost:5000/api/users/show-products`,
      headers: {
        "x-auth-token": token,
      },
    })
      .then((response) => {
        dispatch({ type: "get_CarList", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "Auth_LoginError", payload: err.message });
      });
  };
};

// Delete Cart List if user want
const DeleteCartListContext = (dispatch) => {
  const navigate = useNavigate();
  return ({ id, token }) => {
    // Method to delete data form backend server
    axios({
      method: "delete",
      url: `http://localhost:5000/api/users/delete-products/${id}`,
      headers: {
        "x-auth-token": token,
      },
    })
      .then((response) => {
        if (response.data === "your product has been deleted successfully") {
          navigate("/");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => {
        dispatch({ type: "Auth_LoginError", payload: err.message });
      });
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
    // Logout user
    LogOutContext,
    // add to car list function
    AddCarListContext,
    // get all cart list function
    getAllCarList,
    // Delete cart list method
    DeleteCartListContext,
    //Clear all error
    clearError,
  },

  {
    //variable name
    token: null,
    searchedValue: "",
    loginError: "",
    emailError: false,
    nameError: false,
    loading_button: false,
    success_message: "",
    cart_error: "",
    cart_id: "",
    carList: [],
  }
);
