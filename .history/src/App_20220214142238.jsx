import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, HashRouter as Router, Routes, Link } from "react-router-dom";
import Setup from "./components/Setup.jsx";
import CommandsInfo from "./components/CommandsInfo.jsx";
import CommandsWork from "./components/CommandsWork.jsx";
import Workflow from "./components/Workflow.jsx";
import Conflicts from "./components/Conflicts.jsx";

function App() {
  return (
    <Router>
      <div className="text-center">
        <div className="display-1 mt-1 mb-5 text-white">Git repeat course</div>

        <div className="h3 d-flex w-75 m-auto my-5 justify-content-evenly flex-wrap text-white">
          <Link className="link-style mx-3" to="/Setup">
          Setup
          </Link>
          <Link className="link-style mx-3" to="/Setup">
          Commands (infos)
          </Link>
          <Link className="link-style mx-3" to="/Setup">
          Commands (workflow)
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
          <Route path="/CommandsInfo" element={<CommandsInfo />} />
          <Route path="/CommandsWork" element={<CommandsWork />} />
          <Route path="/Workflow" element={<Workflow />} />
          <Route path="/Conflicts" element={<Conflicts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
