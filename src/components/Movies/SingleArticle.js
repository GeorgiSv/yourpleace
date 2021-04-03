import { Component } from "react";
import './SingleArticle.css'
import movieService from '../../services/dailyArticlesGetter.js'
import userService from '../../services/usersService.js'

class SingleArticle extends Component {

    constructor(props) {
        super(props)

        this.state = { moreInfo: null }

        this.moreInfo = this.moreInfo.bind(this);
        this.addToWatchList = this.addToWatchList.bind(this);
        this.markAsWatched = this.markAsWatched.bind(this);
    }

    moreInfo() {
        movieService.getMovieDetails(this.props.article.id)
            .then(res => {
                console.log(res)
                this.setState({ moreInfo: res })
            })
    }

    addToWatchList(){
    }

    markAsWatched(){

    }

    render() {
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
                        <p>Language: {this.props.article.original_language}</p>
                    </article>
                    <p className='description'>{this.props.article.overview}</p>
                    <div className='movie-buttons-wrapper'>
                        <button onClick={() => this.moreInfo()}>
                            More info
                            </button>
                    </div>
                    {this.state.moreInfo ? <div>
                        <article className='mini-info-wrapper'>
                            <p>Status: {this.state.moreInfo.status}</p>
                            <p>Popularity: {this.state.moreInfo.popularity}</p>
                            <p>Runtime: {this.state.moreInfo.runtime}</p>
                        </article>
                        <p className="tagline">Tagline: <span>{this.state.moreInfo.tagline ? this.state.moreInfo.tagline : "N/A"}</span></p>
                    </div>
                        :
                        <span></span>}
                    <article className="article-link-buttons">
                        <div className='movie-buttons-wrapper'>
                            <button onClick={() => this.addToWatchList()}>
                                Add to watchlist
                            </button>
                        </div>
                        <div className='movie-buttons-wrapper'>
                            <button onClick={() => this.markAsWatched()}>
                                Mark as watched
                            </button>
                        </div>
                    </article>
                </div>




            </article>
        );
    }
}

export default SingleArticle