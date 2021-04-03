import { Component } from "react";
import { Redirect } from "react-router";
import  * as userService from "../../services/usersService.js"

import observer from '../Tools/observer.js'
import firebaseObserver from '../Tools/firebaseObserver.js'

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

        userService.login(email,pass)
            .then((res) => {
                console.log(res.user.uid)
            })
            .catch((err) => {
                console.log("error: " + err.message)
                this.setState({error: "Email or password does not match! PLease try again!"})
        });
        
        if (this.state.error === "") {
            this.setState({isSuccess: true})
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
            return <Redirect to="/explore/trending" />
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
                    <input type='submit' />
                </form>
            </section>);
    }
}

export default Login