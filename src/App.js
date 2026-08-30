import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Participants from './pages/Participants';
import Results from './pages/Results';

import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Nav />

        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
