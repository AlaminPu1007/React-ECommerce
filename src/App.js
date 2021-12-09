import React, { useContext } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
// Search Result page
import SearchResult from "./Pages/SearchResult";
//not found pages
import NotFound from "./component/NotFound";
// category pages
import Mens from "./Pages/category/Mens";
import Women from "./Pages/category/Women";
import Child from "./Pages/category/Child";
import { Routes, Route } from "react-router-dom";
//Auth screen
import Login from "./Pages/authentication/Login";
import Register from "./Pages/authentication/Register";
import Forget from "./Pages/authentication/Forget";
// Shopping pages
import Shopping from "./Pages/Shopping";
import Order from "./Pages/Order";
//Dashboard component
import CarList from "./Pages/dashboardComponent/CarList";
import FavoriteList from "./Pages/dashboardComponent/FavoriteList";
import Blog from "./Pages/dashboardComponent/Blog";
import About from "./Pages/dashboardComponent/About";
import Contact from "./Pages/dashboardComponent/Contact";
//This function return every page at initial position
import ScrollToTop from "./component/ScrollToTop";
//import context
import { Provider as AuthProvider } from "./context/AuthContext";
// import { Context as AuthContext } from "./context/AuthContext";
//import private route
import PrivateRoute from "./component/PrivateRoute";

const App = () => {
  // const {
  //   state: { token },
  // } = useContext(AuthContext);
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Dashboard component screen */}

        {/* Define protected route */}
        <Route element={<PrivateRoute />}>
          <Route path="/cart-list" element={<CarList />} />
          <Route path="/favorite-list" element={<FavoriteList />} />
        </Route>
        {/* Define protected route */}

        {/* category pages */}
        <Route path="/men" element={<Mens />} />
        <Route path="/wo-men" element={<Women />} />
        <Route path="/child" element={<Child />} />
        {/* Searched result page */}
        <Route path="/search-result" element={<SearchResult />} />
        {/*  Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        {/* Shopping page */}
        <Route path="/shop/:id" element={<Shopping />} />
        <Route path="/order/:id" element={<Order />} />
        {/* Dashboard pages */}
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
