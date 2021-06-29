import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateNewPost from "./pages/CreateNewPost/CreateNewPost";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new-post" component={CreateNewPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;