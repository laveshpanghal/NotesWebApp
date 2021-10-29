import React from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Notebooks from "./Components/Notebooks";

function App() {
  return (

      <Router >
<Navbar/>

        <Switch>
          <Route exact path="/"  component={''}/>
            <Route exact path="/Notebooks"  component={Notebooks}/>
          <Route exact path="/Notes"  component={''}/>
          <Route exact path="/Projects/:id/makeChanges" component=''/>



        </Switch>


      </Router>
  );
}

export default App;
