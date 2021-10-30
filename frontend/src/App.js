import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//we import the customer from Axios
import clientAxios from './config/axios';

//components
import Users from './components/Users';
import NewEntry from './components/Users';
import Appointment from './components/Users';
import { useEffect, useState } from 'react';

function App() {

  //State de la app
  const [budget,saveBudget] = useState([]);

  useEffect( () =>{
    const consultAPI = () =>{
      clientAxios.get('/users')
        .then(respuesta => {
          console.log(respuesta)
        })
        .catch(error =>{
          console.log(error);
        })
    }
    consultAPI();
  }, [] );

  console.log(procces.env.REACT_APP_BACKEND_URL);
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
