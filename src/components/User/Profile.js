import { Component } from "react";
import { withRouter, Redirect, Link } from "react-router-dom"
import "./Profile.css"

import * as userService from '../../services/usersService.js'

import {UserContext} from '../UserProvider.js'

import ShortPost from "../Forum/ShortPost.js"
import ShortArticle from "../Movies/ShortArticle";


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            watchList: [],
            forumPosts: [],
            isWatchList: null
        }

    }

    async componentDidMount() {
        if (this.context.user === null) {
            return;
        }

        let user = await userService.getUserFromCollection(this.context.user.uid)
        this.setState({ forumPosts: user.forumPosts })
    }

    async showWatchList() {
        let user = await userService.getUserFromCollection(this.context.user.uid)
        this.setState({ watchList: user.watchList, isWatchList: true })
    }

    async showWatchedList() {
        let user = await userService.getUserFromCollection(this.context.user.uid)
        this.setState({ watchList: user.watchedList, isWatchList: false })
    }

    // async showForumPosts() {
    //     console.log("ForumPosts")
    //     let user = await userService.getUserFromCollection(this.context.user.uid)
    //     console.log(user)
    //     this.setState({ forumPosts: user.forumPosts })
    // }

    render() {

        if (this.context.user === null) {
            return <Redirect to="/user/login"/>;
        }

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "300px",
            padding: 30,
        }

        return (<section style={style} className="section-wrapper">
            <h1 className="username">{this.context.user.email.split('@')[0]}</h1>
            <article className="profile-collections-container">
                <article >
                    <button onClick={() => this.showWatchedList()}>
                    Watched list
                    </button>
                </article>
                <article>
                    <button onClick={() => this.showWatchList()}>
                        Watch list
                    </button>
                </article>
                <article>
                    <Link to="/forum/createpost">
                        Share thoughts
                    </Link>
                </article>
            </article>

                <hr/>

            <section className="user-collections-container">
                <article className="user-movie-collections">
                    {this.state.watchList.length > 0
                        ? this.state.watchList.map((el, i) => <ShortArticle key={i} isWachList={this.state.isWatchList} uid={this.context.user.uid} watchElement={el} />)
                        : <div></div>}
                </article>

                <article className="user-posts-collections">
                    {this.state.forumPosts.length > 0
                        ? this.state.forumPosts.map((el, i) => <ShortPost key={i} post={el} />)
                        : <span>No created post yet!</span>}
                </article>
            </section>

        </section>);
    }
}

Profile.contextType = UserContext

export default withRouter(Profile)