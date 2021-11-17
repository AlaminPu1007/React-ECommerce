import './App.css';
import Dashboard from "./Pages/Dashboard";
// category pages
import Mens from './Pages/category/Mens';
import { Routes, Route } from "react-router-dom";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About=()=>{
  const notify = () => toast("Wow so easy !");
  
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Mens />} />
      </Routes>
    </div>
  );
}

export default()=>{
  return <App/>;
};
