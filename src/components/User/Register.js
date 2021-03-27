import { Component } from "react";
import { Redirect } from "react-router";
import  * as userService from "../../services/usersService.js"

class Register extends Component {
    constructor() {
        super()

        this.state = {
                error:"",
                isSuccess: false
            }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()

        if(event.target.username.value === "" 
        || event.target.email.value === ""
        || event.target.password.value === ""
        || event.target.username.value.length < 3 
        || event.target.email.value.length < 3
        || event.target.password.value.length < 3)
        {
            this.setState({error: "All fields should not be mepty or less than 3 symbols."})
            return;
        }

        if(event.target.password.value !==  event.target.confirmPassword.value)
        {
            this.setState({error: "Passwords do not match! PLease try again!"})
            console.log("Password: " + event.target.username.value)
            console.log("ConfirmPassword: " + event.target.confirmPassword.value)
            return;
        }

        let user = {
            username: event.target.username.value,
            email: event.target.email.value.trim(),
            password: event.target.password.value,
            registeredDate: new Date().toLocaleString(),
        }
       
        userService.register(user)
                   .then((res) => this.setState({isSuccess: true}))
                   .catch((error) =>{
                       this.setState({
                           isSuccess: false,
                           error: "Error occured during processing the request."})
                   });

        if (this.state.isSuccess) {
            userService.addUserToCollection(user)
        }
    }
    
    render() {

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        if (this.state.isSuccess) {
            return <Redirect to="/forum/createpost"/>
        }

        return (
        <section style={style} className="section-wrapper">
            <form onSubmit={this.handleSubmit.bind(this)}>
               <h1 className="error-message">{this.state.error}</h1>
                <label htmlFor="username">Username</label>
                <input type="text"
                    id="username"
                    name="username"></input>
                <br />
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