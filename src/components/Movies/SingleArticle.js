import { Component } from "react";
import './SingleArticle.css'
import movieService from '../../services/dailyArticlesGetter.js'
import * as userService from '../../services/usersService.js'
import { UserContext } from "../UserProvider";
import Alert from "../shared/Alert";

const pictureMainPath = 'https://image.tmdb.org/t/p/w500/';

class SingleArticle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moreInfo: null,
            userDetails: null,
            message: ""
        }

        this.moreInfo = this.moreInfo.bind(this);
        this.addToWatchList = this.addToWatchList.bind(this);
        this.markAsWatched = this.markAsWatched.bind(this);
    }

    async componentDidMount() {
        let userDetails = await userService.getUserFromCollection(this.context.user.uid);
        this.setState({ userDetails })
    }

    async moreInfo() {
        let res = await movieService.getMovieDetails(this.props.article.id);
        this.setState({ moreInfo: res })
    }

    async addToWatchList() {
        if (!this.state.userDetails) {
            return;
        }

        let userDetails = this.state.userDetails
        userDetails.watchList.push({
            title: this.props.article.original_title,
            moviePicture: pictureMainPath + this.props.article.poster_path
        })

        await userService.updateUser(userDetails)
        this.setState({message: "Succsessfuly added to collection!"});
    }

    async markAsWatched() {
        if (!this.state.userDetails) {
            return;
        }

        let userDetails = this.state.userDetails
        userDetails.watchedList.push({
            title: this.props.article.original_title,
            moviePicture: pictureMainPath + this.props.article.poster_path
        })

        await userService.updateUser(userDetails)
        this.setState({message: "Succsessfuly added to collection!"}); 
    }

    render() {
        return (
            <article className='article-container'>
                <img src={pictureMainPath + this.props.article.poster_path} alt="movie-cover">
                </img>
                <div className='article-info-wrapper'>

                    {this.state.message ? <Alert message={this.state.message} status="success"/> : <span></span>}

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

SingleArticle.contextType = UserContext

export default SingleArticle