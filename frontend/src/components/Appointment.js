import React, {Fragment} from "react";
import { Link , withRouter} from "react-router-dom";
import clientAxios from "../config/axios";

const Appointment= (props) => {

    if(!props.appointment){
        props.history.push('/');
        return null;
    }

    //extract by props
    const {appointment: {_id , name, date, hour, type, amount, concept}} = props;
    
    //delete register
    const deleteAppointment = id =>{
        clientAxios.delete('/users/${id}')
            .then(respuesta => {
                props.saveConsult(true);
                props.history.push('/');

            })
            .catch(error =>{
                console.log(error)
            })

           
    }

    return(
        <Fragment>
            <h1 className="my-5" >Name: {name}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                    <Link to="{'/'}" className="btn btn-succes text-uppercase py-2 px-5 font-weight-bold">
                    return
                    </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action
                            flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{name}</h3>
                                    <small className="fecha-alta">
                                        {date} - {hour}
                                    </small>
                                </div>

                                <p className="mb-0">
                                    {type}
                                </p>
                                <div className="contacto py-3">
                                    <p>Amount: {amount} </p>
                                    <p>Concept: {concept} </p>
                                </div>

                                <div className="d-flex">
                                    <button type="button"
                                        className="text-uppercase py-5
                                        font-weight-bold btn btn-danger col"
                                        onClick= { ()=> deleteAppointment(id)}
                                    >
                                        Delete &times;
                                    </button>
                                </div>

                            </div>
                        </div> 
                    </div>
                </div>   
            </div>
        </Fragment>
    );
}

export default withRouter(Appointment) ;