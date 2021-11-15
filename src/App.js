
import './App.css';
// import { FaBeer } from "react-icons/fa";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route, Link } from "react-router-dom";

// library.add(fab, faCheckSquare, faCoffee);

const About=()=>{
  return(
    <div>
      about screen!
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default()=>{
  return <App/>;
};
