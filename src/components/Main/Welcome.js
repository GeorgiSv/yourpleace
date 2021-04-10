import { Component } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider.js';

class Welcome extends Component {

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

        const welcomeArticleStyle = {
            display: "flex",
        }

        const articleLinks = {
            margin: 18,
            color: "#2AFCDD",
            textDecoration: "none",
            padding: 20,
        }

        const ulStyle = {
            marin: 19,
            padding: 46,

        }

        const leftSideStyle = {
            marin: 19,
            padding: 46,
        }

        return (<section style={style} className="about section-wrapper">
            <h1 style={headingStyle}>Welcome to YOURPLACE</h1>
            <article style={welcomeArticleStyle}>
                <ul style={ulStyle}>
                    <li>Chheckout movies, articles, forum posts and more all in one</li>
                    <li>Check us often and find new trening movies and shows</li>
                    <li>Ask, answer or just share opinion in the forum section</li>
                    <li>JUST YOURPLACE</li>
                </ul>
                <article style={leftSideStyle}>
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
                        </>
                    }
                </article>
            </article>
        </section>);
    }
}

Welcome.contextType = UserContext

export default Welcome