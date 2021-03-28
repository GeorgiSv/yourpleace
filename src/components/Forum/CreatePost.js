import { Component } from "react";
import { Redirect} from 'react-router-dom';

import * as forumService from "../../services/forumService.js"


class CreatePost extends Component{
    constructor(props){
        super(props)
        
        this.state = {post:{
                        author: "",
                        authorId: "",
                        datetime: "",
                        title: "", 
                        text: "",
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

    componentDidMount(){

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
        post.author = this.props.user.email;
        post.authorId = this.props.user.uid;

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

        if (!this.props.user) {
            return <Redirect to="/user/login"/>
        }

        return(
            <section>
                <h1>CreatePost</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="error-message">{this.state.error}</h1>
                    <label>Title</label>
                    <input type="text"
                           name = "header" 
                           value={this.state.title}
                           onChange={this.handleChange}></input>
<br/>
                    <label>Description</label>
                    <input type="text"
                           name = "description"
                           value={this.state.text}
                           onChange={this.handleChange}></input>
<br/>
                    <label>Tags</label>
                    <input type="text"
                           name = "movieTitle"
                           value={this.state.tags}
                           onChange={this.handleChange}></input>
<br/>
                    <input type='submit'/>
                </form>
            </section>

        );
    }

}

export default CreatePost