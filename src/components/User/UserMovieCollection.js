import { Component } from "react";
import { Redirect } from "react-router";
import  * as userService from "../../services/usersService.js"

class UserMovieCollection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article>
                <img src={this.props.watchElement.moviePicture}/>
            </article>
        )
    }
}

export default UserMovieCollection