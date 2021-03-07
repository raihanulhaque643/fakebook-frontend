import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AllOpinions from "./pages/AllOpinions";
import Login from "./pages/Login";
import MyOpinions from "./pages/MyOpinions";
import Navbar from './components/Navbar'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if(!token) {
    return <Login setToken={setToken} />
  }

  localStorage.setItem('token', token)

  return (
    <div className="">
      <Router>

        <Navbar setToken={setToken} />

        <Switch>
          <Route path='/all-opinions'>
            <AllOpinions setToken={setToken} />
          </Route>
          <Route path='/my-opinions'>
            <MyOpinions setToken={setToken} />
          </Route>
          <Route path=''>
            <Redirect to="/all-opinions" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
