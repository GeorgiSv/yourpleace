import { Component } from "react";
import { Link } from 'react-router-dom';

import "./Post.css"

class Post extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <article className="post">
                <div className="post-header">
                <h2>{this.props.post.title}</h2>
                <h2 className="gold-text">{this.props.post.movieTitle}</h2>
                </div>
                
                <article className="post-wrapper-main">
                    <div className="info-post-container">
                        <p>Votes: {this.props.post.votes}</p>
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