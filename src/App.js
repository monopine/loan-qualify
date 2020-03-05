import React from "react";
import { Router } from "@reach/router";

import Landing from "./Landing";
import Deny from "./Deny";
import Register from "./Register";

function App() {
  return (
    <>
      <div className="page-wrap">
        <Router>
          <Landing path="/" />
          <Register path="/register/" />
          <Deny path="/deny/" />
        </Router>
      </div>
    </>
  );
}

export default App;
