import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';

class TrendWeeklyMoviesFeed extends Component{
    constructor(){
        super()

        this.state = { 
            dayilyMovies: [],
            // popularMovies: []
        }
    }
    
    componentDidMount() {
            moviesService.getDailyTrendindArticles()
            .then(article =>{
                this.setState(() => ({dayilyMovies: article.results}))
            });

            // moviesService.getPopularMovies()
            // .then(article =>{
            //     this.setState(() => ({popularMovies: article.results}))
            // });
    }

    render(){

        return(
            <article>
                    {this.state.dayilyMovies.map(a => <SingleArticle key={a.id} article={a}/>)}
            </article>
        );
    }
}


export default TrendWeeklyMoviesFeed