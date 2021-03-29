import { Component } from "react";
import { Redirect} from 'react-router-dom';

import * as forumService from "../../services/forumService.js"

import Post from "./Post.js"
import './Post.css'

import modifier from "../../utils.js"


class RecentPosts extends Component{
    constructor(){
        super()
        
        this.state = { posts: []}
    }

    componentDidMount(){
        forumService.getAllPosts()
            .then(res => {
                console.log(res.docs.map(modifier))
                    this.setState(() => ({posts: res.docs.map(modifier)}))
            })
    }

    render(){

        return(
            <section>
              <h1>Recent Posts</h1>
              <section className="post-wrapper">
              {this.state.posts.map(p => <Post key={p.id} post={p} />)}
              </section>
            </section>

        );
    }

}

export default RecentPosts