import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';

class TrendWeeklyMoviesFeed extends Component{
    constructor(){
        super()

        this.state = { 
            weeklyMovies: [],
            // dayilyMovies: [],
            // popularMovies: []
        }
    }
    
    componentDidMount() {
            moviesService.getWeeklyTrendingArticles()
            .then(article =>{
                this.setState(() => ({weeklyMovies: article.results}))
            });

            // moviesService.getDailyTrendindArticles()
            // .then(article =>{
            //     this.setState(() => ({dayilyArticles: article.results}))
            // });

            // moviesService.getPopularMovies()
            // .then(article =>{
            //     this.setState(() => ({popularMovies: article.results}))
            // });
    }

    render(){

        // let result;
        // if (this.props.location.pathname === '/weeklytrends') {
        //     result = this.state.weeklyMovies.map(a => <SingleArticle key={a.id} article={a}/>);
        // }
        // else if(this.props.location.pathname === '/dayilytrends')  {
        //     result = this.state.dayilyMovies.map(a => <SingleArticle key={a.id} article={a}/>);
        // }
        // else if(this.props.location.pathname === '/popular')  {
        //     result = this.state.popularMovies.map(a => <SingleArticle key={a.id} article={a}/>);
        // }
        console.log(this.state.weeklyMovies);
        return(
            <article>
                    {this.state.weeklyMovies.map(a => <SingleArticle key={a.id} article={a}/>)}
            </article>
        );
    }
}


export default TrendWeeklyMoviesFeed