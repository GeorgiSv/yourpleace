import { Component } from 'react';
import './Header.css';
import { Route, Link, Switch } from 'react-router-dom';
import * as firebase from '../services/firebase.js'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {loggedIn: false}
    }

    componentDidMount(){
        
    firebase.auth.onAuthStateChanged((user) => {
        this.setState({loggedIn: true})
        console.log("asddsa")
      });
    }

    render() {

        return (
            <div className='header-wrapper'>
                <header className='section-wrapper'>
                    <Link to='/whatsnew' className='logo'><h1>YOURPLASE</h1></Link>
                    <nav>
                        <ul className='navigation'>
                            <Link to="/explore">
                                <li className='navigation-element'>
                                    Explore
                             </li>
                            </Link>
                            <Link to="/about">
                                <li className='navigation-element'>
                                    About
                            </li>
                            </Link>
                            {this.state.loggedIn
                                ?
                                <>
                                    <Link to="/profile">
                                        <li className='navigation-element'>
                                            {localStorage.getItem("email")}
                                        </li>
                                    </Link>
                                    <Link to="/user/logout">
                                        <li className='navigation-element'>
                                           Logout
                                        </li>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/user/login">
                                        <li className='navigation-element'>
                                            Login    /
                             </li>
                                    </Link>
                                    <Link to="/user/register">
                                        <li className='navigation-element'>
                                            Register
                             </li>
                                    </Link>
                                </>
                            }

                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header