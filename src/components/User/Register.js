import { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import  * as userService from "../../services/usersService.js"

class Register extends Component {
    constructor() {
        super()

        this.state = {
                error:"",
            }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()

        if( event.target.email.value === ""
        || event.target.password.value === "" 
        || event.target.email.value.length < 3
        || event.target.password.value.length < 3)
        {
            this.setState({error: "All fields should not be mepty or less than 3 symbols."})
            return;
        }

        if(event.target.password.value !==  event.target.confirmPassword.value)
        {
            this.setState({error: "Passwords do not match! PLease try again!"})
            console.log("ConfirmPassword: " + event.target.confirmPassword.value)
            return;
        }

        let user = {
            email: event.target.email.value.trim(),
            password: event.target.password.value,
            registeredDate: new Date().toLocaleString(),
        }

        userService.register(user)
                   .then((res) => {
                       useHistory().push('/')
                    })
                   .catch((error) =>{
                       console.log(error)
                       this.setState({
                           isSuccess: false,
                           error: "Error occured during processing the request."})
                   });
                   
    }
    
    render() {

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        return (
        <section style={style} className="section-wrapper">
            <form onSubmit={this.handleSubmit.bind(this)}>
               <h1 className="error-message">{this.state.error}</h1>
                <label htmlFor="email">Email</label>
                <input type="email"
                    name="email"
                    id="email" ></input>
                <br />
                <label htmlFor="password">Password</label>
                <input type="text"
                    name="password" 
                    id="password"></input>
                <br />
                <label htmlFor="confirmPassword">ConfirmPassword</label>
                <input type="text"
                    name="confirmPassword" 
                    id="confirmPassword"></input>
                <br />
                <input type='submit' />
            </form>
        </section>);
    }
}

export default Register