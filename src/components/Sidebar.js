import { Component } from "react";
import {Link} from "react-router-dom"

class SideBar extends Component{

    render(){
        return (
            <aside className='sidebar'>
            <article className='side-top-wrapper'>
                <ul className='sidebar-navigation'>
                    <li className='sidebar-navigation-element'>
                        <Link to="/explore/trending">
                            Trendings
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
                <ul className='sidebar-navigation'>
                    <li className="sidebar-navigation-element">
                        <Link to="/forum/recentposts">
                            Recent Posts
                    </Link>
                    </li>
                    <li className="sidebar-navigation-element">
                        <Link to="/forum/createpost">

                            Create Posts
                    </Link>
                    </li>
                </ul>
            </article>
        </aside>
        );
    }
}

export default SideBar