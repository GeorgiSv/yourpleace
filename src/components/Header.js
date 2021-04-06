import { Component } from 'react';
import './Header.css';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import * as firebase from '../services/firebase.js'
import * as userService from '../services/usersService.js'
import { UserContext } from './UserProvider.js';

class Header extends Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
        console.log(this.context)
    }

    handleClick(){
        userService.logout()
        .then((res) => {
            
        });
        console.log("Logging out...")
    }

    render() {

        return (
            <div className='header-wrapper'>
                <header className='section-wrapper'>
                    <Link to='/' className='logo'><h1>YOURPLASE</h1></Link>
                    <nav>
                        <ul className='navigation'>
                            <Link to="/explore/trending">
                                <li className='navigation-element'>
                                    Explore
                             </li>
                            </Link>
                            <Link to="/about">
                                <li className='navigation-element'>
                                    About
                            </li>
                            </Link>
                            { this.context.user
                                ?
                                <>
                                    <Link to="/user/profile">
                                        <li className='navigation-element'>
                                            {this.context.user.email}
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

Header.contextType = UserContext

export default Header