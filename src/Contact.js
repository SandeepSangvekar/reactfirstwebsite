import React, { useState } from 'react'
import './Contact.css';
// import Form from './Form'

const Contact = () => {
    const [data, setdata] = useState({
        fullname: '',
        phone:'',
        email:'',
        msg:'',
    })
    const inputevent = (event) =>{
        const {name, value} = event.target;
        setdata((preValue)=>{
            return {
                ...preValue,
                [name] : value,
            }
        })
    }
    const submitForm = (e) =>{
        e.preventDefault();
        alert(`I am ${data.fullname}. My contact number is ${data.phone}. email ID is ${data.email} and here my message: ${data.msg}.`)
        // alert(JSON.stringify(data));
    }
    return (
        <>
            <div className="my-5 text-center">
                <h2>Contact</h2>
            </div>
           <div className="container">
               <div className="row">
                   <div className="col-md-6 mx-auto">
                        <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label for="fullname" className="form-label">Full Name:</label>
                            <input type="text" name="fullname" value={data.fullname} onChange={inputevent} className="form-control" placeholder="Enter your fullname" />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Contact Number:</label>
                            <input type="number" name="phone" value={data.phone} onChange={inputevent} className="form-control" placeholder="Enter your contact no.." />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address:</label>
                            <input type="email" name="email" value={data.email} onChange={inputevent} className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="msg" className="form-label">Message</label>
                            <textarea name="msg" value={data.msg} onChange={inputevent} className="form-control" placeholder="Write your message" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                   </div>
               </div>
           </div>
        </>
        // <div className="contact-style">
        //     <h2>Welcome to Contact page</h2>
        //     <br/>
        //     <Form />
        // </div>
    )
}

export default Contact;
