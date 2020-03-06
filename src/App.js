import React from "react";
import { Router } from "@reach/router";

import Landing from "./Landing";
import Deny from "./Deny";
import Register from "./Register";
import Thanks from "./Thanks";

function App() {
  return (
    <>
      <div className="page-wrap">
        <Router>
          <Landing path="/" />
          <Register path="/register/" />
          <Deny path="/deny/" />
          <Thanks path="/thanks/" />
        </Router>
      </div>
    </>
  );
}

export default App;
