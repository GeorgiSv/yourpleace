import { Component } from "react";
import { Redirect } from "react-router";
import * as userService from "../../services/usersService.js"

import observer from '../Tools/observer.js'
import firebaseObserver from '../Tools/firebaseObserver.js'
import "./Login.css"

class Login extends Component {
    constructor() {
        super()

        this.state = {
            error: "",
            isSuccess: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()

        let email = event.target.email.value
        let pass = event.target.password.value

        if( email === ""|| pass === "" || 
        email.length < 3 || pass.length < 3)
        {
            this.setState({error: "All fields should not be mepty or less than 3 symbols."})
            return;
        }

        userService.login(email, pass)
            .then((e) => {this.setState({ isSuccess: true })})
            .catch((err) => {
                console.log("error: " + err.message)
                this.setState({ error: err.message })
            });
    }

    render() {

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        if (this.state.isSuccess) {
            return <Redirect to="/explore/trending" />
        }

        return (
            <section style={style} className="section-wrapper">
                 <h1 className="error-message">{this.state.error}</h1>
                <form onSubmit={this.handleSubmit.bind(this)} style={{ border: "1px solid #ccc",textAlign:"center" }}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <br/>
                        <input type="email" 
                            placeholder="Enter Email" 
                            name="email" 
                            id='email'
                            required />
<br/>
                        <label htmlFor="password"><b>Password</b></label>
                        <br/>
                        <input type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            required />

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign In</button>
                        </div>
                    </div>
                </form>
            </section>)
    }
}

export default Login