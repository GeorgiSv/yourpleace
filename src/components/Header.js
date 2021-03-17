import { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        return (
          <div className='header-wrapper'>
            <header className='section-wrapper'>
                <a href='#' className='logo'><h1>YOURPLASE</h1></a>
                <nav>
                    <ul className='navigation'>
                        <a href='#'>
                            <li className='navigation-element'>
                                Explore
                             </li>
                        </a>
                        <a href='#'><li className='navigation-element'>
                            About
                        </li>
                        </a>
                        <a href='#'><li className='navigation-element'>
                            Login
                        </li>
                        </a>
                    </ul>
                </nav>
            </header>
          </div>
        );
    }
}

export default Header