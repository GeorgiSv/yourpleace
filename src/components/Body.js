import { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import './Body.css';
import SideBar from "./Sidebar";

import Trending from './Movies/Trending.js'
import Search from "./Movies/Search.js"
import PopularMoviesFeed from './Movies/PopularMoviesFeed.js'

import CreatePost from './Forum/CreatePost.js'
import RecentPosts from './Forum/RecentPosts.js'
import FullPost from './Forum/FullPost.js'
import NotFound from "./NotFound";

class Body extends Component {

    render() {
        return (
            <div className='body-wrapper section-wrapper'>
                <main className=''>
                    <Switch>
                        <Route path="/explore/trending" component={Trending} />
                        <Route path="/explore/popular" component={PopularMoviesFeed} />
                        <Route path="/explore/search" component={Search} />
                        <Route path="/forum/createpost" component={() => <CreatePost />} />
                        <Route path="/forum/recentposts" component={RecentPosts} />
                        <Route path="/forum/post/:postId" component={FullPost} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <SideBar />
            </div>
        );
    }
}

export default Body