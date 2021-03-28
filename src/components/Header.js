import { Component } from 'react';
import './Header.css';
import { Route, Link, Switch } from 'react-router-dom';
import * as firebase from '../services/firebase.js'
import * as userService from '../services/usersService.js'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleClick(){
        userService.logout();
        console.log("Logging out...")
    }

    render() {

        return (
            <div className='header-wrapper'>
                <header className='section-wrapper'>
                    <Link to='/' className='logo'><h1>YOURPLASE</h1></Link>
                    <nav>
                        <ul className='navigation'>
                            <Link to="/explore/whatsnew">
                                <li className='navigation-element'>
                                    Explore
                             </li>
                            </Link>
                            <Link to="/about">
                                <li className='navigation-element'>
                                    About
                            </li>
                            </Link>
                            {this.props.user
                                ?
                                <>
                                    <Link to="/user/profile">
                                        <li className='navigation-element'>
                                            {this.props.user.email}
                                        </li>
                                    </Link>
                                        <li className='navigation-element'>
                                           <button onClick={() => this.handleClick()} >Logout</button>
                                        </li>
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