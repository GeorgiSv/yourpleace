import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Cover from './components/Cover.js'
import Body from './components/Body';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
     <Header/>
     <Cover />
     <Body />
     {/* <Footer /> */}
    </div>
  );
}

export default App;
