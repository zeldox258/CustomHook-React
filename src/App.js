import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';


function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
