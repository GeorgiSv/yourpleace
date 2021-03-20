import { Component } from "react";

class Login extends Component {
    constructor() {
        super()

    }

    render() {

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        return (<section style={style} className="section-wrapper">
            <form>
                <label>Email</label>
                <inpu></inpu>
                <label>Password</label>
                <inpu></inpu>
                <button>
                    LOGIN
                </button>
            </form>
        </section>);
    }
}

export default Login