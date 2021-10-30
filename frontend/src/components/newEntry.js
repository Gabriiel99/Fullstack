import React, {Fragment} from "react";
import {Link} from 'react-router-dom';

const newEntry = () =>{
    return (
        <Fragment>
            <h1 className="my-5">Create</h1>
            <div className="container mt-5 py-5">
                <div className="col-12 mb-5 d-flex justify-content-center">
                    <Link to="{'/'}" className="btn btn-succes text-uppercase py-2 px-5 font-weight-bold">
                    return
                    </Link>
                </div>
                <div className="col-md-8 mx-auto">
                <form className="bg-white p-5 bordered">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="name" 
                name="name" 
                placeholder="name" 
            />
        </div>

        <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
                type="number" 
                className="form-control form-control-lg" 
                id="amount" 
                name="amount" 
                placeholder="Amount" 
            />
        </div>

        <div className="form-group">
            <label htmlFor="concept">Concept</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="concept" 
                name="concept" 
                placeholder="Concept" 
            />
        </div>

        <div className="form-group">
            <label htmlFor="date">Date</label>
            <input 
                type="date" 
                className="form-control form-control-lg" 
                id="date" 
                name="date"  
            />
        </div>

        <div className="form-group">
            <label htmlFor="hour">Hour</label>
            <input 
                type="time" 
                className="form-control form-control-lg" 
                id="hour" 
                name="hour"  
            />
        </div>

        <div className="form-group">
            <label htmlFor="type">Type</label>
            <textarea 
                className="form-control" 
                name="type" 
                rows="6"
            ></textarea>
        </div>


        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Create"  />
</form>
                </div>
            </div>
        </Fragment>
    )
}

export default newEntry;