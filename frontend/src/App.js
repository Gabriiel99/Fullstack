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
  const [consult , saveConsult] = useState(true);

  useEffect( () =>{
    if(consult){
      const consultAPI = () =>{
        clientAxios.get('/users')
          .then(respuesta => {
            //put the result in state
            saveBudget(respuesta.data);

            //disable consult
            saveConsult(false);

          })
          .catch(error =>{
            console.log(error);
          })
      }
      consultAPI();
    }
  }, [consult] );

  console.log(procces.env.REACT_APP_BACKEND_URL);
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component = { () => <Users budget={budget}/>}
        />
        <Route
          exact path="/new"
          component = {() => <NewEntry saveConsult= {saveConsult} />}
        />
         <Route
          exact path="/appointment/:id"
          render = {(props) =>{
            const appointment = appointment.filter(appointment => appointment._id === props.match.params.id );
            

            return(
              <Appointment
              appointment = {appointment[0]}
              saveConsult = {saveConsult}
              />
            )
          }} 
          
        />
      </Switch>
    </Router>
  );
}

export default App;
