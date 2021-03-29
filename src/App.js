import { Route, Link, Switch } from 'react-router-dom';
import { Component } from 'react'

import * as firebase from '../src/services/firebase.js'
import * as userService from '../src/services/usersService.js'

import './App.css';
import Header from './components/Header.js'
import Cover from './components/Cover.js'
import Body from './components/Body';
import Footer from './components/Footer.js'

import Welcome from './components/Main/Welcome.js'
import About from './components/Main/About.js'
import NotFound from './components/NotFound.js'

import Login from './components/User/Login.js'
import Register from './components/User/Register.js'
import Profile from "../src/components/User/Profile.js"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, user })

        localStorage.setItem('email', user.email)
        localStorage.setItem('isLogged', true)
        localStorage.setItem('uid', user.uid)
      }
      else {
        this.setState({ loggedIn: false, user: null })
        localStorage.clear();
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Cover />
        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <Route path="/about" component={About} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
          <Route path="/user/profile" component={() => <Profile />} />

          <Body user={this.state.user} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
