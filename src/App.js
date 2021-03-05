import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllOpinions from "./pages/AllOpinions";
import Login from "./pages/Login";
import MyOpinions from "./pages/MyOpinions";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="">
      <Router>
        <Switch>
          <Route path='/all-opinions'>
            <AllOpinions />
          </Route>
          <Route path='/my-opinions'>
            <MyOpinions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
