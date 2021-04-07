import { Component } from "react";
import { Link } from 'react-router-dom';

import * as forumService from "../../services/forumService.js"
import modifier from "../../utils.js"

import "./Post.css"

function ShortPost(props){

        return (
            <article className="post center-post">
                    <h2>{props.post.title}</h2>
                        <p>{props.post.datetime}</p>
                <div className="forum-feed-buttons">
                        <Link to={"/forum/post/" + props.post.id}>
                            Check
                        </Link>
                    </div>
            </article>
        );
}

export default ShortPost