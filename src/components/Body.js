import { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import './Body.css';

import WhatsNew from './Main/WhatsNew.js'

import TrendWeeklyMoviesFeed from './Movies/TrendWeeklyMoviesFeed.js'
import TrendDayilyMoviesFeed from './Movies/TrendDayilyMoviesFeed.js'
import PopularMoviesFeed from './Movies/PopularMoviesFeed.js'

import CreatePost from './Forum/CreatePost.js'
import RecentPosts from './Forum/RecentPosts.js'

class Body extends Component {

    constructor(props){
        super(props)
     
    }

    render() {
        return (
            <div className='body-wrapper section-wrapper'>
                <main className=''>
            <Switch>
                        <Route path="/whatsnew" component={WhatsNew}/>
                        <Route path="/weeklytrends" component={TrendWeeklyMoviesFeed} />
                        <Route path="/dayilytrends" component={TrendDayilyMoviesFeed} />
                        <Route path="/popular" component={PopularMoviesFeed} />
                        <Route path='/forum'>
                            <Route path="/forum/createpost" component={CreatePost} />
                            <Route path="/forum/recentposts" component={RecentPosts} />
                        </Route>
            </Switch>

                </main>
                <aside className='sidebar'>
                    <article className='side-top-wrapper'>
                        <ul className='sidebar-navigation'>
                            <li className='sidebar-navigation-element'>
                                <Link to="/whatsnew">
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
                    <article className='side-bottom-wrapper forum-navigation'>
                        <ul>
                            <Link to="/forum/recentposts">
                                    <li>
                                        Recent Posts
                                    </li>
                             </Link>
                             <Link to="/forum/createpost">
                                    <li>
                                        Create Posts
                                    </li>
                             </Link>
                             <Link to="/forum/createpost">
                                    <li>
                                        Create Posts
                                    </li>
                            </Link>
                        </ul>
                    </article>
                </aside>
            </div>
        );
    }
}

export default Body