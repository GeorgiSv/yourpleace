import { Component } from "react";
import moviesService from '../../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'
import '../Body.css';

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

        return(
            <article>
                    {this.state.popularMovies.map(a => <SingleArticle key={a.id} article={a}/>)}
            </article>
        );
    }
}


export default PopularMoviesFeed