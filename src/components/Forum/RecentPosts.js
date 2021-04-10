import { Component } from "react";
import { Redirect} from 'react-router-dom';

import * as forumService from "../../services/forumService.js"

import Post from "./Post.js"
import './Post.css'

import modifier from "../../utils.js"
import { UserContext } from "../UserProvider.js";


class RecentPosts extends Component{
    constructor(){
        super()
        
        this.state = { posts: []}
    }

    componentDidMount(){
        forumService.getAllPosts()
            .then(res => {
                    this.setState(() => ({posts: res.docs.map(modifier)}))
            })
    }

    render(){

        if (this.context.user === null) {
            return <Redirect to="/user/login" />
        }

        return(
            <section>
              <h1 className="gold-text">Recent Posts</h1>
              <section className="post-wrapper">
              {this.state.posts.length >= 0 ? this.state.posts.sort(x => x.date).map(p => <Post key={p.id} post={p} />)
                :   <h2>No posts yet</h2>}
              </section>
            </section>

        );
    }

}

RecentPosts.contextType = UserContext

export default RecentPosts