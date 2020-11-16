import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = { 
            fullname: "Sandeep Bharat Sangvekar",
            email: "Enter your email address",
            phone: "9890974524",
            message: "Pls subscribe to my channel."
        }
    }
    // handlename = (event) => {
    //     this.setState({fullname: event.target.value})
    //     // console.log(event.target.value);
    // }
    // handleemail = (event) => {
    //     this.setState({email: event.target.value})
    //     // console.log(event.target.value);
    // }
    // handlephone = (event) => {
    //     this.setState({phone: event.target.value})
    //     // console.log(event.target.value);
    // }
    // handlemessage = (event) => {
    //     this.setState({message: event.target.value})
    //     // console.log(event.target.value);
    // }

    handlechangeall = (event) => {
        this.setState ( { [event.target.name] :event.target.value } )
    }
    handlesubmit = (event) => {
        // alert(`my name is is ${this.state.fullname}.
        //     my email id is ${this.state.email}
        //     my contact number is ${this.state.phone}
        //     my message to your company is ${this.state.message}`
        //     );
        alert( JSON.stringify(this.state))
        event.preventDefault();  
        console.log(JSON.stringify(this.state));
    }
    render(){
        return (
            <div className="formMaindiv">
                <form onSubmit = {this.handlesubmit} >
                    <label>Full Name :</label><br/>
                    <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechangeall} /> <br/>

                    <label>Email :</label><br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handlechangeall}/> <br/>

                    <label>Mobile :</label><br/>
                    <input type="number" name="phone" value={this.state.phone} onChange={this.handlechangeall}/> <br/>

                    <label>Message :</label><br/><br/>
                    <textarea name="message" value={this.state.message} onChange={this.handlechangeall}/> <br/>

                    <input type="submit" value="Send" /> 
                </form>

            </div>
        )
    }
}

export default Form;