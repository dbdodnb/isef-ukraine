import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/Nav';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Participants from './pages/Participants';
import Results from './pages/Results';

import './App.css';
import ScrollToTop from './components/ScrollToTop';
import ScrollEffects from './components/ScrollEffects';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollEffects />
      <div className='App'>
        <Nav />
        {/* <a 
          href="https://jasu-international.forms.app/isef-ukraine-2027-1-step-registration" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-form-btn"
        >
          Реєстрація до I етапу
        </a> */}
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Partners />
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;