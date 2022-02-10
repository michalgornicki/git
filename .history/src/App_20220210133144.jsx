import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Basics from "./components/arrays.jsx"
import Variables from "./components/variables.jsx"
import Numbers from "./components/numbers.jsx"
import Loops from "./components/loops.jsx"
import Async from "./components/async.jsx"
import DOM from "./components/DOM manipulation.jsx"
import Window from "./components/window.jsx"

function App() {
  

  return (


    <Router>
    <div className="text-center">
      <div className="display-1 mt-1 mb-5 text-white">Git repeat course</div>

      <div className="h3 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">

      <Link className="link-style mx-3" to="/Basics">Basics</Link>
      <Link className="link-style mx-3" to="/Structure">Project structure</Link>
      <Link className="link-style mx-3" to="/Conflicts">Conflicts</Link>


      </div>
     
      <Routes>
          <Route path="/Basics" element={<Basics />} />
          <Route path="/Structure" element={<Structure />} />
          <Route path="/Conflicts" element={<Conflicts />} />
        </Routes>


    </div>
    </Router>
  );
}

export default App;
