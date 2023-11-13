import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/about' exact element = {<About/>}/>
        <Route path='/contact' exact element = {<Contact/>}/>
      </Routes>
    </Router>
    
    </div>
   
  );
}
export default App;
