import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Cover from './components/Cover.js'
import Body from './components/Body';
import Footer from './components/Footer.js'
import { Route, Link, Switch } from 'react-router-dom';
import Welcome from './components/Main/Welcome.js'
import About from './components/Main/About.js'
import NotFound from './components/NotFound.js'
import Login from './components/User/Login.js'
import Register from './components/User/Register.js'
import { Component } from 'react'
import observer from '../src/components/Tools/observer.js'

class App extends Component {
  constructor(props) {
    super(props)

    // if (localStorage.getItem("email")) {
    //   this.state = {
    //     loggedIn: true,
    //   }
    // }
    // else{
    //   this.state = {
    //     loggedIn: false,
    //   }
    // }

    // observer.onLogin = this.onLogin.bind(this);
  }

  // onLogin() {
  //   if (localStorage.getItem("email") === null) {
  //     console.log("Null in local storage")
  //     return;
  //   }
  //   console.log("Setting logged state")
  //   this.setState({
  //     loggedIn: true
  //   })
  // }

  onLogout() {
//loggedIn={this.state.loggedIn}
  }

  render() {
    return (
      <div className="App">
        <Header  />
        <Cover />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />

          <Body />

          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
