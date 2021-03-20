import { Component } from "react";

class Profile extends Component{
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
            Profile..
        </section>);
    }
}

export default Profile