import { Component } from "react";
import { Link } from 'react-router-dom';

import * as forumService from "../../services/forumService.js"
import modifier from "../../utils.js"

import "./Post.css"

class Post extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <article className="post">
                    <h2>{this.props.post.title}</h2>
               <article className="post-wrapper-main">
                    <div className="info-post-container">
                        <h4>Author: <span>{this.props.post.author}</span></h4>
                        <p>{this.props.post.datetime}</p>
                    </div>
                        <p className="post-text-container">{this.props.post.text}</p>
               </article>

                    
                <div className="forum-feed-buttons">
                        <Link to={"/forum/post/" + this.props.post.id}>
                            Check comments ({this.props.post.comments.length})
                        </Link>
                        <Link to={"/forum/post/" + this.props.post.id + "/#createComment"}>
                            Write comment
                        </Link>
                    </div>
            </article>
        );
    }

}

export default Post