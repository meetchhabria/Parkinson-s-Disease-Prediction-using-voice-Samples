// App.js
import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
    <Home />
    <About />
    <Contact />
    </div>
    
  );
};

export default App;
