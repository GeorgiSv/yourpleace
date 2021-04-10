import { Component } from "react";
import { withRouter } from "react-router";
import * as userService from "../../services/usersService.js"

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

    async handleSubmit(event) {
        event.preventDefault()

        let email = event.target.email.value
        let pass = event.target.password.value

        if (email === "" || pass === "" ||
            email.length < 3 || pass.length < 3) {
            this.setState({ error: "All fields should not be mepty or less than 3 symbols." })
            return;
        }

        userService.login(email, pass)
            .then((res) => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    error: error.message
                })
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
                <h1 className="error-message">{this.state.error}</h1>
                <form onSubmit={this.handleSubmit.bind(this)} style={{ border: "1px solid #ccc", textAlign: "center" }}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <br />
                        <input type="email"
                            placeholder="Enter Email"
                            name="email"
                            id='email'
                            required />
                        <br />
                        <label htmlFor="password"><b>Password</b></label>
                        <br />
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

export default withRouter(Login)