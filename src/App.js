import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App(props) {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div>
          <Routes>
            {/* fix for Router inside Router error */}
            {/* <Route exact path="/" element={<App />} /> */}
            {/* fix for showing main on home screen only */}
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <Main /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
