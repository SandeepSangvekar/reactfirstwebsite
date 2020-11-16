import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
const Service = (props) =>{
    return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <h2 className="text-center my-5">Service page</h2>
                <div className="row gy-4">
                    {
                        Sdata.map((val, ind) =>{
                            return <Card imgsrc={val.imgsrc} title={val.title}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Service;