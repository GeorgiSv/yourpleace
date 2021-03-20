import { Component } from 'react';
import './Header.css';
import { Route, Link, Switch } from 'react-router-dom';

class Header extends Component {

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
                        <Link to="/login">
                            <li className='navigation-element'>
                            Login
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
          </div>
        );
    }
}

export default Header