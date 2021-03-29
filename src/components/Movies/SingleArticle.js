import { Component } from "react";
import './SingleArticle.css'
import * as userService from '../../services/usersService.js'

class SingleArticle extends Component{

    constructor(props){
        super(props)

    }

    addToAlreadyWatched(){
       
    }
    
    render(){
        // console.log(this.props.article);

        return (
            <article className='article-container'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + this.props.article.poster_path}>
                    </img>
                    <div className='article-info-wrapper'>
                        <h1>{this.props.article.original_title}</h1>
                        <article className='statistics-info-wrapper'></article>
                        <article className='mini-info-wrapper'>
                            <p>Avarage votes: {this.props.article.vote_average}</p>
                            <p>Date: {this.props.article.release_date}</p>
                            <p>Genre</p>
                            <p>Runtime</p>
                            <p>STATUS: RELEASED</p>
                            <p>tagline</p>
                        </article>
                        <p className='description'>{this.props.article.overview}</p>
                        <div className='movie-buttons-wrapper'>
                            <button onClick={() => this.checkCommunity()}>
                            Share you criticism for this movie
                            </button>
                        </div>
                    </div>
            </article>
        );
    }
}

export default SingleArticle