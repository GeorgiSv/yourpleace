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

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/user">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </Route>

        <Body />

        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
