import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react'

import * as firebase from '../src/services/firebase.js'
import * as userService from '../src/services/usersService.js'

import {UserContext} from "./components/UserProvider";

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
      user: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });

    // firebase.auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true, user })

    //     localStorage.setItem('email', user.email)
    //     localStorage.setItem('isLogged', true)
    //     localStorage.setItem('uid', user.uid)
    //   }
    //   else {
    //     this.setState({ loggedIn: false, user: null })
    //     localStorage.clear();
    //   }
    // });
  }

  render() {
    return (
      <UserContext.Provider value={ {user: this.state.user}}>
        <div className="App">
          <Header />
          <Cover />
          <Switch>
            <Route exact path="/" component={() => <Welcome />} />
            <Route path="/about" component={About} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/register" component={Register} />
            <Route path="/user/profile" component={() => <Profile />} />
            {/* <Route path="/user/logout" component={() => (
              firebase.auth.signOut()
                .then(() =>
                {
                  <Redirect to="/"/>
                })
                <Redirect to="/"/>
            }) /> */}

            <Body />

            <Route component={NotFound} />
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
