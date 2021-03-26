import './App.css';
import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./pages/signin/signIn"
import Creatchef from "./pages/chef renion/create/creatChef"
import SignUp from "./pages/participant/signUp/signUp"
import ChefTable from "./pages/chef renion/table/tableChef"
import ParticipantTable from "./pages/participant/table/tableparticpant"
import Navbar from "./pages/all/navbar"
import UpdateChef from "./pages/chef renion/update/updateChef"
import UpdateParticipant from "./pages/participant/update/updateParticipant"
class App extends Component {
  render() {
    return (

      <Router>
        <Navbar />
        <div className="App">
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/SignIn">SignIn</Link>
                </li>
                <li>
                  <Link to="/UpdateChef">UpdateChef</Link>
                </li>
                <li>
                  <Link to="/UpdateParticipant">UpdateParticipant</Link>
                </li>
                <li>
                  <Link to="/Creatchef">Creatchef</Link>
                </li>
                <li>
                  <Link to="/SignUp">SignUp</Link>
                </li>
                <li>
                  <Link to="/ChefTable">ChefTable</Link>
                </li>
                <li>
                  <Link to="/ParticipantTable">ParticipantTable</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/SignIn">
                <SignIn />
              </Route>
              <Route path="/UpdateChef">
                <UpdateChef />
              </Route>
              <Route path="/UpdateParticipant">
                <UpdateParticipant />
              </Route>
              <Route path="/Creatchef">
                <Creatchef />
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/ChefTable">
                <ChefTable />
              </Route>
              <Route path="/ParticipantTable">
                <ParticipantTable />
              </Route>
            </Switch>
          </div>
        </div>

      </Router>
    );
  }

}

export default App;
