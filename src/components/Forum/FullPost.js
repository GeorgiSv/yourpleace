import { Component } from "react";
import { Link } from 'react-router-dom';

import * as forumService from "../../services/forumService.js"

import modifier from "../../utils.js"

import "./Post.css"

class FullPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {},
            comments: [],
            error: ""
        }

        this.onWriteCommentClick = this.onWriteCommentClick.bind(this)
    }

    componentDidMount() {
        console.log(this.props.match.params.postId)
        forumService.getPost(this.props.match.params.postId)
            .then((res) => {
                console.log(modifier(res))
                let post = modifier(res);
                this.setState({ post, comments: post.comments })

            })
    }

    onWriteCommentClick(event) {
        event.preventDefault()
        console.log(event.target.commentText.value)

        if (!event.target.commentText.value) {
            this.setState({ error: "Please at least some text(3) before submit your comment!" })
            return;
        } else {
            this.setState({ error: "" })
        }

        let comment = {
            author: localStorage.getItem("email"),
            text: event.target.commentText.value,
            date: new Date().toLocaleString(),
        }
        console.log(comment)

        let finalPost = this.state.post
        finalPost.comments.push(comment)
        console.log(finalPost)

        this.setState({ post: finalPost })

        forumService.addComment(finalPost)
            .then((res) => {
                console.log(res)
            })
            .catch(err => {
                this.setState({ error: "Something happend duriong processing the request. Please try again later!" })
                console.log(err);
            })
    }

    render() {

        return (
            <article className="post">

                {/* {Post details} */}
                <h2>{this.state.post.title}</h2>
                <div className="info-post-container">
                  <div className="post-info">
                  <h4>Author: <span>{this.state.post.author}</span></h4>
                    <p>{this.state.post.datetime}</p>
                  </div>
                    <p>{this.state.post.text}</p>
                </div>

                {/* {Comments...} */}
                <h2 style={{textAlign: "left", margin: 7}}>Comments</h2>
                {this.state.comments.map((el, i) =>

                    <article key={el.id} className="comment">
                      <p>{el.text}</p>
                        <div className="comment-info">
                            <h3>{el.author}</h3>
                            <span>{el.date}</span>
                        </div>
                    </article>)
                }

                <h1 className="error-message">{this.state.error}</h1>

                {/* {Creating comment} */}

                <form onSubmit={this.onWriteCommentClick} id="createComment" >
                    <textarea type="text" name="commentText" className="commenting-text"/>
                    <button className="write-comment-button" type="submit">
                        Write comment
                    </button>
                </form>


            </article>
        );
    }

}

export default FullPost