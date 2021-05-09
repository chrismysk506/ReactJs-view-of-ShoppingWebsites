import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

       <Route exact path="/" >
         <Home></Home>
        </Route>

      <Route exact path="/about" >
       <About></About>
      </Route>
      
      </Router>
    </div>
  );
}

export default App;
