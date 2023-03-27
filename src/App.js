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
        {/* console.log("2");
        <Routes>
        console.log("3");
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/" Component={App} />
        </Routes>
        console.log("4"); */}
       
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
