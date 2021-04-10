import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';
import { UserContext } from "../UserProvider.js";
import { Redirect } from "react-router";

class Trending extends Component{
    constructor(){
        super()

        this.state = { 
            movies: [],
        }

        this.dailyTrendingMovies = this.dailyTrendingMovies.bind(this);
        this.weeklyTrendingMovies = this.weeklyTrendingMovies.bind(this);
    }
    
    dailyTrendingMovies() {
            moviesService.getDailyTrendindArticles()
            .then(article =>{
                this.setState(() => ({movies: article.results}))
            });
    }

    weeklyTrendingMovies(){
        moviesService.getWeeklyTrendingArticles()
        .then(article =>{
            this.setState(() => ({movies: article.results}))
        });
    }

    render(){

        if (this.context.user === null) {
            return <Redirect to="/user/login" />
        }

        return(
            <article className ="trending">
                  <article style={{borderBottom: "1px solid black", padding: 9}} className="article-link-buttons">
                        <div className='movie-buttons-wrapper'>
                            <button onClick={() => this.dailyTrendingMovies()}>
                                Daily
                            </button>
                        </div>
                        <div className='movie-buttons-wrapper'>
                            <button onClick={() => this.weeklyTrendingMovies()}>
                               Weekly
                            </button>
                        </div>
                        <br/>
                    </article>

                    {this.state.movies.length > 0 ? this.state.movies.map(a => <SingleArticle key={a.id} article={a}/>)
                    : <div></div>}
                    <h2 style={{margin: 16}}>Choose trending filter ...</h2>
            </article>
        );
    }
}

Trending.contextType = UserContext

export default Trending