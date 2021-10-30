import React, {Fragment} from "react";
import {Link} from 'react-router-dom';

const Users = ({budgets}) =>{

    if(budget.lenght === 0) return null;

    return (
        <Fragment>
            <h1 className="my-5">Budget Manager</h1>

            <div className="container mt-5 py-5">
                <div className="col-12 mb-5 d-flex justify-content-center">
                    <Link to="{'/new'}" className="btn btn-succes text-uppercase py-2 px-5 font-weight-bold">
                    To register
                    </Link>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        {budgets.map(cita =>(
                            <a key={budget._id} className="p-5 list-group-item list-group-
                            item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{budget.name}</h3>
                                    <small class="fecha-alta">
                                        {budget.date} - {budget-hour}
                                    </small>
                                </div>

                                <p className="mb-0">
                                    {budget.type}
                                </p>
                                <div className="contacto py-3">
                                    <p>Amount: {budget.amount} </p>
                                    <p>Concept: {budget.concept} </p>
                                </div>    
                            </a>
                            
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>)
}

export default Users 