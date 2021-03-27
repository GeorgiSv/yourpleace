import { Component } from "react";
import { Link} from 'react-router-dom';

import * as forumService from "../../services/forumService.js"

import modifier from "../../utils.js"


class Post extends Component{
    constructor(props){
        super(props)
        
    }

    render(){

        return(
            <article>
                <h2>{this.props.post.title}</h2>
                <span>{this.props.post.author}</span>
                <p>{this.props.post.datetime}</p>
                <div className="post-text-container">
                    <p>{this.props.post.text}</p>
                </div>
                <div>Comments {this.props.post.comments.length}</div>
                <Link to="">
                    Check comments
                </Link>
                <Link to="">
                   Write comment
                </Link>
            </article>
        );
    }

}

export default Post