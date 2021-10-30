import React, {Fragment} from "react";

const Users = ({budgets}) =>{

    if(budget.lenght === 0) return null;

    return (
        <Fragment>
            <h1 className="my-5">Budget Manager</h1>

            <div className="container mt-5 py-5">
                <div className="col-12 mb-5 d-flex justify-content-center">
                    <a href="#" className="btn btn-succes text-uppercase py-2 px-5 font-weight-bold">
                    To register
                    </a>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        {budgets.map(cita =>(
                            <h3 className="mb-3">{budget.name}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>)
}

export default Users 