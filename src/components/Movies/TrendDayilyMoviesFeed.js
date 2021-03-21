import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';

class TrendWeeklyMoviesFeed extends Component{
    constructor(){
        super()

        this.state = { 
            dayilyMovies: [],
        }
    }
    
    componentDidMount() {
            moviesService.getDailyTrendindArticles()
            .then(article =>{
                this.setState(() => ({dayilyMovies: article.results}))
            });
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