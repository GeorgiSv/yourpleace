import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';
import { UserContext } from "../UserProvider.js";
import { Redirect } from "react-router";

class PopularMoviesFeed extends Component{
    constructor(){
        super()

        this.state = { 
            popularMovies: []
        }
    }
    
    componentDidMount() {
            moviesService.getPopularMovies()
            .then(article =>{
                this.setState(() => ({popularMovies: article.results}))
            });
    }

    render(){

        if (this.context.user === null) {
            return <Redirect to="/user/login" />
        }

        return(
            <article>
                    {this.state.popularMovies.map(a => <SingleArticle key={a.id} article={a}/>)}
            </article>
        );
    }
}

PopularMoviesFeed.contextType = UserContext

export default PopularMoviesFeed