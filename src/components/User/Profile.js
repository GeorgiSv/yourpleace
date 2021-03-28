import { Component } from "react";
import { Redirect, Link } from "react-router-dom"
import "./Profile.css"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEmail: "",
            uid: ""
        }
        
    }

    componentDidMount() {
        this.setState({
            userEmail: localStorage.getItem("email"),
            uid: localStorage.getItem("uid")
        })
    }

    onClickHandler(){

    }

    render() {

        if (this.state.userEmail === null) {
            return <Redirect to="/user/login" />;
        }

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        return (<section style={style} className="section-wrapper">
            <h1 className="username">{this.state.userEmail.split('@')[0]}</h1>
            <article className="profile-collections-container">
                <article>
                    <Link to="">
                        Watched movies
                    </Link>
                </article>
                <article>
                    <Link to="">
                        Watch list
                    </Link>
                </article>
                <article>
                    <Link to="">
                        My posts
                    </Link>
                </article>
                <article>
                    <Link to="/forum/createpost">
                        Share thoughts
                    </Link>
                </article>
            </article>
        </section>);
    }
}

export default Profile