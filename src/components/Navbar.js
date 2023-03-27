import React from 'react';
import { Link } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

// this import is fix for navbar coming as table instead of navbar
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return(
        <div>
            <div className="navbar navbar-expand-md bg-dark navbar-dark opacity-60" style={{height:"85px"}}>
                <Link className="navbar-brand" to="/"><img src={require('../images/logo.png')} alt="logo" width={140} height={72}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <button type="button" class="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button> */}
                <div className="navbar-collapse collapse" id="collapsibleNavbar">
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