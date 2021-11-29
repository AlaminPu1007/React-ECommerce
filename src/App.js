import "./App.css";
import Dashboard from "./Pages/Dashboard";
//not found pages
import NotFound from './component/NotFound';
// category pages
import Mens from "./Pages/category/Mens";
import Women from "./Pages/category/Women";
import Child from "./Pages/category/Child";
import { Routes, Route } from "react-router-dom";
//Auth screen
import Login from "./Pages/authentication/Login";
import Register from "./Pages/authentication/Register";
import Forget from "./Pages/authentication/Forget";
//Dashboard component
import CarList from "./Pages/dashboardComponent/CarList";
import FavoriteList from "./Pages/dashboardComponent/FavoriteList";
//This function return every page at initial position
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Dashboard component screen */}
        <Route path="/cart-list" element={<CarList />} />
        <Route path="/favorite-list" element={<FavoriteList />} />
        {/* category pages */}
        <Route path="/men" element={<Mens />} />
        <Route path="/wo-men" element={<Women />} />
        <Route path="/child" element={<Child />} />
        {/*  Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default () => {
  return <App />;
};
