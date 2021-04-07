import { Component } from 'react';
import './Header.css';
import { Link, withRouter  } from 'react-router-dom';
// import * as firebase from '../services/firebase.js'
import * as userService from '../services/usersService.js'
import { UserContext } from './UserProvider.js';

class Header extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick(){
        await userService.logout();
        console.log(this.props.history)
        this.props.history.push("/")
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
                                        <li className='navigation-element nav-username'>
                                            {this.context.user.email}
                                        </li>
                                    </Link>
                                    <a>
                                        <li className='navigation-element'>
                                           <button onClick={this.handleClick} >Logout</button>
                                        </li>
                                        </a>
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

export default withRouter(Header)