import React from 'react';
import {NavLink} from "react-router-dom";
const Common = (props) =>{
    return <>
    <div id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>{props.name} <strong className="brand-name">Sandy Technical</strong></h1>
                            <h2 className="my-3">We are team of talented developer making websites.</h2>
                            <div className="mt-3">
                                <NavLink className="btn btn-primary" to={props.visit}>{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center">
                            <img className="img-fluid animated" src={props.img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}
export default Common;
