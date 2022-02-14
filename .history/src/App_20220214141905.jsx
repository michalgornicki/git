import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Basics from "./components/basics.jsx";
import Structure from "./components/structure.jsx";
import Conflicts from "./components/conflicts.jsx";

function App() {
  return (
    <Router>
      <div className="text-center">
        <div className="display-1 mt-1 mb-5 text-white">Git repeat course</div>

        <div className="h3 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">
          <Link className="link-style mx-3" to="/Basics">
            Commands
          </Link>
          <Link className="link-style mx-3" to="/Structure">
            Workflows
          </Link>
          <Link className="link-style mx-3" to="/Conflicts">
            Conflicts
          </Link>
        </div>

        <Routes>
          <Route path="/Setup" element={<Setup />} />
          <Route path="/Commands (" element={<Basics />} />
          <Route path="/Basics" element={<Basics />} />
          <Route path="/Structure" element={<Structure />} />
          <Route path="/Conflicts" element={<Conflicts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
