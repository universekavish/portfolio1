import React from 'react';
import { Link } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

// this import is fix for navbar coming as table instead of navbar
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return(
        // <div>
        //     <li>
        //         <Link to='/About'>About</Link>
        //         <Link to='/Projects'>Projects</Link>
        //         <Link to='/Resume'>Resume</Link>
        //         <Link to='/Contact'>Contact</Link>
        //     </li>
        // </div>
        <div>
            <div className="navbar navbar-expand-md bg-dark navbar-dark" style={{height:"85px"}}>
                <Link className="navbar-brand" to="/"><img src={require('../images/logo.png')} alt="logo" width={200} height={90}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects" >PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Resume">RESUME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">CONTACT</Link>
                        </li>
                        <li className="nav-item d-none d-sm-none d-md-block ">
                            <GithubCorner href={"https://github.com/universekavish"} bannerColor="#151513" octoColor="#fff" size={85} direction="right" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;