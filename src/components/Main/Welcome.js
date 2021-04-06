import { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { UserContext } from '../UserProvider.js';

class Welcome extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "600px",
            padding: 20,
        }

        const headingStyle = {
            fontSize: 29,
            margin: 0,
            padding: 0,
            color: "gold",
            textAlign: "center",
        }

        const spanStyle = {
            color: "#2AFCDD"
        }

        const creditsStyle = {
            color: "gold"
        }

        const welcomeArticleStyle = {
            display: "flex",
        }

        const articleLinks = {
            margin: 18,
            color: "#2AFCDD",
            textDecoration: "none",
            padding: 20,
        }

        return (<section style={style} className="about section-wrapper">
            <h1 style={headingStyle}>Welcome to YOURPLACE</h1>
            <article style={welcomeArticleStyle}>
                <article>
                    <p>Chheckout movies, articles, forum posts and more all in one</p>
                    <p>Check us often and find new trening movies and shows</p>
                    <p>Ask, answer or just share opinion in the forum section</p>
                    <p>JUST YOURPLACE</p>
                </article>
                <article>
                    {this.context.user ?
                        <>
                            <p>Hi, {this.context.user.email}</p>
                            <Link style={articleLinks} to="/user/profile">
                                <span>Profile</span>
                            </Link>
                            <Link style={articleLinks} to="/explore/trending">
                                <span>Explore</span>
                            </Link>
                            <Link style={articleLinks} to="/forum/recentposts">
                                <span>Recent posts</span>
                            </Link>
                        </>
                        :
                        <>
                            <p>In order to pleaseure yourself with all content of YOURPLACE, please login to your plrofile. If you don't have one, register now copletly free@</p>
                            <Link style={articleLinks} to="/user/login">
                                <span>Login</span>
                            </Link>
                            <Link style={articleLinks} to="/user/register">
                                <span>Register</span>
                            </Link>
                            <Link style={articleLinks} to="/publiccontent">
                                <span>Check public content</span>
                            </Link>
                        </>
                    }
                </article>
            </article>
        </section>);
    }
}

Welcome.contextType = UserContext

export default Welcome