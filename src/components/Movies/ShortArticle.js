import { Component } from "react";
import './SingleArticle.css'
import movieService from '../../services/dailyArticlesGetter.js'
import * as userService from '../../services/usersService.js'

const pictureMainPath = 'https://image.tmdb.org/t/p/w500/';

class ShortArticle extends Component {

    constructor(props) {
        super(props)

    }

    handleRemove(){
        console.log("here")
    }

    render() {

        return (
            <article className="short-article-container">
                <div className='article-info-wrapper'>
                    <h1>{this.props.watchElement.title}</h1>
                </div>
          <article className="short-article-info-wwrapper">
             <img className="short-picture" src={this.props.watchElement.moviePicture}>
                </img>
          </article>
          <button onClick={() => this.handleRemove()}>Remove</button>
            </article>
        );
    }
}

export default ShortArticle