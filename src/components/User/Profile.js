import { Component } from "react";
import { Redirect, Link } from "react-router-dom"
import "./Profile.css"

import UserMovieCollection from "./UserMovieCollection.js"
import movieService from '../../services/dailyArticlesGetter.js'
import * as userService from '../../services/usersService.js'

import Post from "../Forum/Post.js"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEmail: "",
            uid: "",
            watchList: [],
            forumPosts: []
        }

    }

    async componentDidMount() {
        let user = await userService.getUserFromCollection(localStorage.getItem("uid"))
        console.log(user)
        this.setState({
            userEmail: localStorage.getItem("email"),
            uid: localStorage.getItem("uid"),
        })

    }

    async showWatchList() {
        console.log("watchList")
        let user = await userService.getUserFromCollection(this.state.uid)
        this.setState({ watchList: user.watchList })
    }

    async showWatchedList() {
        console.log("watchedList")
        let user = await userService.getUserFromCollection(this.state.uid)
        this.setState({ watchList: user.watchedList })
    }

    async showForumPosts() {
        // console.log("ForumPosts")
        // let user = await userService.getUserFromCollection(this.state.uid)
        // this.setState({ watchList: user.forumPosts })
    }

    render() {

        if (this.state.uid === null) {
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
                    <button onClick={() => this.showWatchedList()}>
                        Watched movies
                    </button>
                </article>
                <article>
                    <button onClick={() => this.showWatchList()}>
                        Watch list
                    </button>
                </article>
                {/* <article>
                    <button onClick={() => this.showForumPosts()}>
                        My posts
                    </button>
                </article> */}
                <article>
                    <Link to="/forum/createpost">
                        Share thoughts
                    </Link>
                </article>
            </article>


            <section className="user-collections-container">
                <article className="user-movie-collections">
                    {this.state.watchList.length > 0
                        ? this.state.watchList.map((el, i) => <UserMovieCollection key={i} watchElement={el} />)
                        : <span></span>}
                </article>

                <article className="user-posts-collections">
                    {this.state.forumPosts.length > 0
                        ? this.state.forumPosts.map((el, i) => <Post key={i} post={el} />)
                        : <span>No created post yet!</span>}
                </article>
            </section>

        </section>);
    }
}

export default Profile