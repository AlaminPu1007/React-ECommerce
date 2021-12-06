import createDataContext from "./createDataContext";
import api from "../Api/api";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {

    // header search input value
    case "searched_value": 
     return {...state, searchedValue: action.payload}; 

    default:
      return state;
  }
};


const Login = (dispatch) => {

  return async ({ email, password, history }) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      if (response.data.message === "login in successfully") {
        await localStorage.setItem("token", response.data.token);
        dispatch({ type: "get_token", payload: response.data.token });
        history.push("/");
      } else {
        dispatch({ type: "get_LoginError", payload: response.data });
      }
    } catch (err) {
      dispatch({ type: "get_LoginError", payload: err.message });
      // console.log(err.message);
    }
  };
};
// from header pages search value 
const SearchedInputValue=(dispatch)=>{
  return(value)=>{
    console.log(value);
    dispatch({type: "searched_value", payload: value})
  }
}

export const { Context, Provider } = createDataContext(
  reducer,

  {
    //function name
    Login,
    //header pages searched input value
    SearchedInputValue,
  },

  {
    //variable name
    token: null,
    searchedValue: '',
  }
);
