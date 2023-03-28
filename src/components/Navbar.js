import React from 'react';
import { Link } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

// this import is fix for navbar coming as table instead of navbar
import 'bootstrap/dist/css/bootstrap.min.css';
// fix for navbar collapse button not working
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
    return(
        <div>
            {/* removing height from below div was the fix for navbar content showing on other components when expanding. */}
            <div className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" to="/"><img src={require('../images/logo.png')} alt="logo" width={140} height={72}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/*  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" adding this to below line was the fix for navbar not closing automatically say suppose I clicked on About */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <ul className="navbar-nav me-auto mr-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><b>ABOUT</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects"><b>PROJECTS</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume"><b>RESUME</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><b>CONTACT</b></Link>
                        </li>
                        <li className="nav-item d-none d-sm-none d-md-block ">
                            <GithubCorner href={"https://github.com/universekavish"} target="_blank" bannerColor="#151513" octoColor="#fff" size={85} direction="right" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;