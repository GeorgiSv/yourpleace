import { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';

import * as forumService from "../../services/forumService.js"
import * as userService from '../../services/usersService.js'
import { UserContext } from "../UserProvider.js";

class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {
                author: "",
                authorId: "",
                datetime: "",
                title: "",
                text: "",
                tags: "",
                movieTitle: "",
                type: "",
                comments: [],
            },
            error: "",
            shouldRedirectToREcentPosts: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let post = this.state.post
        post[event.target.name] = event.target.value;

        this.setState({ post })
    }

    async handleSubmit(event) {
        event.preventDefault()

        let post = this.state.post;
        post.type = event.target.type.value;
        post.votes = 0;

        if (post.title === "" || post.title.length < 3) {
            this.setState({ error: "Title should not be empty or less than 3 symbols." })
            return;
        }
        else if (post.text === "" || post.text.length < 3) {
            this.setState({ error: "Description should not be empty or less than 5 symbols." })
            return;
        }

        post.datetime = new Date().toLocaleString();
        post.author = this.context.user.email;
        post.authorId = this.context.user.uid;

        let response = await forumService.addPost(this.state.post)
        post.id = response.id;

        let userr = await userService.getUserFromCollection(this.context.user.uid)
        userr.forumPosts.push(post);
        await userService.updateUser(userr);
        console.log(post)

        this.setState({ error: "" })
        this.props.history.push("/forum/post/" + post.id)
        //this.state.shouldRedirectToREcentPosts = true;
    }

    render() {

        // if (this.state.shouldRedirectToREcentPosts) {
        //     return <Redirect to="/forum/recentposts" />
        // }

        if (this.context.user === null) {
            return <Redirect to="/user/login" />
        }

        return (
            <section>
                <h1 className="error-message">{this.state.error}</h1>
                <form onSubmit={this.handleSubmit.bind(this)} style={{ border: "1px solid #ccc", textAlign: "center" }}>
                    <div className="container">
                        <h1>CreatePost</h1>
                        <hr />

                        <label htmlFor="title"><b>Post Title</b></label>
                        <br />
                        <input type="text"
                            placeholder="Enter title"
                            name="title"
                            required
                            value={this.state.title}
                            onChange={this.handleChange} />
                        <br />
                        <label htmlFor="movieTitle"><b>Movie title about</b></label>
                        <br />
                        <input type="text"
                            placeholder="Enter movie title"
                            value={this.state.title}
                            name="movieTitle"
                            required
                            value={this.state.movieTitle}
                            onChange={this.handleChange} />
                        <br />
                        <label htmlFor="movieTitle"><b>Description</b></label>
                        <br />
                        <textarea type="text"
                            className="create-post-description"
                            rows="8"
                            placeholder="Enter description"
                            name="text"
                            required
                            value={this.state.text}
                            onChange={this.handleChange}></textarea>
                        <br />

                        <select name="type" className="create-post-type-selector">
                            <option value="shares">Shares</option>
                            <option value="question">Question</option>
                        </select>

                        <br />
                        <label htmlFor="movieTitle"><b>Tags</b></label>
                        <br />
                        <input type="text"
                            placeholder="Enter tags"
                            name="movieTitle"
                            value={this.state.tags}
                            onChange={this.handleChange}
                        />

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Create</button>
                        </div>
                    </div>
                </form>
                {/* <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="error-message">{this.state.error}</h1>
                    <label>Title</label>
                    <input type="text"
                           name = "title" 
                           value={this.state.title}
                           onChange={this.handleChange}></input>
<br/>
                    <label>Description</label>
                    <textarea type="text"
                           name = "text"
                           rows = "10"
                           value={this.state.text}
                           onChange={this.handleChange}></textarea>
<br/>
                    <label>Tags</label>
                    <input type="text"
                           name = "movieTitle"
                           value={this.state.tags}
                           onChange={this.handleChange}></input>
<br/>
                    <input type='submit'/>
                </form> */}
            </section>

        );
    }

}

CreatePost.contextType = UserContext

export default withRouter(CreatePost)