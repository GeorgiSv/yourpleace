import { Component } from "react";

class Register extends Component{
    constructor(){
        super()

    }

    render(){

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
                <label>Confirm Password</label>
                <inpu></inpu>
                <button>
                Register
                </button>
            </form>
        </section>);
    }
}

export default Register