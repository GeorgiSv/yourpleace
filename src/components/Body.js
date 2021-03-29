import { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import './Body.css';

import WhatsNew from './Main/WhatsNew.js'

import TrendWeeklyMoviesFeed from './Movies/TrendWeeklyMoviesFeed.js'
import TrendDayilyMoviesFeed from './Movies/TrendDayilyMoviesFeed.js'
import PopularMoviesFeed from './Movies/PopularMoviesFeed.js'
import Search from "./Movies/Search.js"

import CreatePost from './Forum/CreatePost.js'
import RecentPosts from './Forum/RecentPosts.js'
import FullPost from './Forum/FullPost.js'

import observer from '../components/Tools/observer.js'

class Body extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className='body-wrapper section-wrapper'>
                <main className=''>
                    <Switch>
                        <Route path="/explore/whatsnew" component={WhatsNew} />
                        <Route path="/explore/weeklytrends" component={TrendWeeklyMoviesFeed} />
                        <Route path="/explore/dayilytrends" component={TrendDayilyMoviesFeed} />
                        <Route path="/explore/popular" component={PopularMoviesFeed} />
                        <Route path="/explore/search" component={Search} />
                        <Route path="/forum/createpost" component={() => <CreatePost user={this.props.user} />} />
                        <Route path="/forum/recentposts" component={RecentPosts} />
                        <Route path="/forum/post/:postId" component={FullPost} />
                    </Switch>

                </main>
                <aside className='sidebar'>
                    <article className='side-top-wrapper'>
                        <ul className='sidebar-navigation'>
                            <li className='sidebar-navigation-element'>
                                <Link to="/explore/whatsnew">
                                    What's new?
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/explore/weeklytrends">
                                    Weekly Trending movies
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/explore/dayilytrends">
                                    Daily Trending movies
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/explore/popular">
                                    Popular
                                </Link>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <Link to="/explore/search">
                                    Search
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