import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import * as userService from "../../services/usersService.js"
import * as forumService from "../../services/forumService.js"

import "./Post.css"

function ShortPost(props){

    const [isRemoved, setIsRemoved] = useState(false);

    async function deletePost(){

        try {
            
            await forumService.deletePost(props.post.id);

            let user = await userService.getUserFromCollection(props.post.authorId)
            let newCollection = user.forumPosts.filter(x => x.id !== props.post.id)
            user.forumPosts = newCollection;

            await userService.updateUser(user);
            setIsRemoved(true);

        } catch (error) {
            console.log(error)
        }
    }

        return (isRemoved ? <span></span> :
            <article className="post center-post">
                    <h2>{props.post.title}</h2>
                        <p>{props.post.datetime}</p>
                <div className="forum-feed-buttons">
                        <Link to={"/forum/post/" + props.post.id}>
                            Check
                        </Link>

                        <button onClick={() => deletePost()}>
                            Delete
                        </button>
                    </div>
            </article>
        );
}

export default ShortPost