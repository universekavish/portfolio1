import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Social from './components/Social';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Main />
        <Footer />
        <Social />
      </Router>
    </div>
  );
}

export default App;
