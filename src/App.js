import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Secret from './components/pages/Secret'



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/about' exact element = {<About/>}/>
        <Route path='/contact' exact element = {<Contact/>}/>
        <Route path='/secret' exact element = {<Secret/>}/>
        
        
      </Routes>
    </Router>
    
    </div>
   
  );
}
export default App;
