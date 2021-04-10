import { Component } from "react";
import './SingleArticle.css'
import * as userService from '../../services/usersService.js'

class ShortArticle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isRemoved: false
        }
    }

    async handleRemove() {
        
        console.log("Removing movie from collection..")

        try {
            let user = await userService.getUserFromCollection(this.props.uid)
            
            if (this.props.isWachList) {
                let newCollection = user.watchList.filter(x => x.title !== this.props.watchElement.title)
                user.watchList = newCollection;

            } else{
                let newCollection = user.watchedList.filter(x => x.title !== this.props.watchElement.title)
                user.watchedList = newCollection;
            }

            await userService.updateUser(user);
            this.setState({isRemoved: true})

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            this.state.isRemoved ? <div></div> :
            <article className="short-article-container">
                <article className="short-article-info-wwrapper">
                    <img className="short-picture" src={this.props.watchElement.moviePicture} alt="movie-cover">
                    </img>
                </article>
                <h1 className="gold-text">{this.props.watchElement.title}</h1>
                <button onClick={() => this.handleRemove()}>Remove</button>
            </article>
        );
    }
}

export default ShortArticle