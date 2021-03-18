import { Component } from "react";
import './Body.css';
import nasaService from '../services/dailyArticlesGetter.js'
import SingleArticle from './Movies/SingleArticle.js'
import { Route, Link, Switch } from 'react-router-dom';
import TrendWeeklyMoviesFeed from './Movies/TrendWeeklyMoviesFeed.js'
import TrendDayilyMoviesFeed from './Movies/TrendDayilyMoviesFeed.js'
import PopularMoviesFeed from './Movies/PopularMoviesFeed.js'


class Body extends Component {

    constructor(props){
        super(props)
     
    }

    render() {
        return (
            <div className='body-wrapper section-wrapper'>
                <main className=''>
            <Switch>
                   <Route exact path="/weeklytrends" component={TrendWeeklyMoviesFeed} />
                   <Route exact path="/dayilytrends" component={TrendDayilyMoviesFeed} />
                   <Route exact path="/popular" component={PopularMoviesFeed} />
            </Switch>

                </main>
                <aside className='sidebar'>
                    <article className='side-top-wrapper'>
                        <ul className='sidebar-navigation'>
                            <li className='sidebar-navigation-element'>
                                <Link to="">
                                    What's new?
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/weeklytrends">
                                     Weekly Trending movies
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/dayilytrends">
                                    Daily Trending movies
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/popular">
                                    Popular
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/">
                                    Other 
                                </Link>
                            </li>
                        </ul>
                    </article>
                    <article className='side-bottom-wrapper'>dsa</article>
                </aside>
            </div>
        );
    }
}

export default Body