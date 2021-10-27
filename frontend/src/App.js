import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Users from './components/Users';
import NewEntry from './components/Users';
import Appointment from './components/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component = {Users}
        />
        <Route
          exact path="/new"
          component = {NewEntry}
        />
         <Route
          exact path="/appointment/:id"
          component = {Appointment}
        />
      </Switch>
    </Router>
  );
}

export default App;
