import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';

class TrendWeeklyMoviesFeed extends Component{
    constructor(){
        super()

        this.state = { 
            weeklyMovies: [],
        }
    }
    
    componentDidMount() {
            moviesService.getWeeklyTrendingArticles()
            .then(article =>{
                this.setState(() => ({weeklyMovies: article.results}))
            });
    }

    render(){
        return(
            <article>
                    {this.state.weeklyMovies.map(a => <SingleArticle key={a.id} article={a}/>)}
            </article>
        );
    }
}


export default TrendWeeklyMoviesFeed