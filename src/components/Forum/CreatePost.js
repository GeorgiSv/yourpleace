import { Component } from "react";
import { Redirect} from 'react-router-dom';

import * as forumService from "../../services/forumService.js"


class CreatePost extends Component{
    constructor(){
        super()
        
        this.state = {post:{
                        author: "",
                        datetime: "",
                        header: "", 
                        description: "",
                        tags: "",
                        comments: [],
                        // {
                        //     author: "",
                        //     datetime: "",
                        //     text: ""
                        // }
                        },
                      error: "",
                      shouldRedirectToREcentPosts: false}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let post = this.state.post
        post[event.target.name] = event.target.value;

        this.setState({post})
    }

    handleSubmit(event){
        event.preventDefault()

        let post = this.state.post;
        
        if(post.header === "" || post.header.length < 3)
        {
            this.setState({error: "Header should not be empty or less than 3 symbols."})
            return;
        }
        else if(post.description === "" || post.description.length < 3){
            this.setState({error: "Description should not be empty or less than 5 symbols."})
            return;
        }

        post.datetime = new Date().toLocaleString();

        console.log(post)
        forumService.addPost(this.state.post)
        this.setState({error: ""})

        this.state.shouldRedirectToREcentPosts = true; 
    }

    render(){

        const shouldRedirect = this.state.shouldRedirectToREcentPosts
        if (shouldRedirect) {
            return <Redirect to="/forum/recentposts"/>
        }

        return(
            <section>
                <h1>CreatePost</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="error-message">{this.state.error}</h1>
                    <label>HEADER</label>
                    <input type="text"
                           name = "header" 
                           value={this.state.header}
                           onChange={this.handleChange}></input>
<br/>
                    <label>Description</label>
                    <input type="text"
                           name = "description"
                           value={this.state.description}
                           onChange={this.handleChange}></input>
<br/>
                    <label>Movie related:</label>
                    <input type="text"
                           name = "movieTitle"
                           value={this.state.movieTitle}
                           onChange={this.handleChange}></input>
<br/>
                    <input type='submit'/>
                </form>
            </section>

        );
    }

}

export default CreatePost