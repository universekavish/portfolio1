import React from "react";
import githubLogo from '../images/socialIcons/githublogo.png';
import Footer from "./Footer";

const Projects = () => {
    return (
        <div>
            <div>
                <section id="extra-features" className="extra-features pt-5 pb-5" style={{ backgroundColor: "#33383e" }}>
                    <div className="container text-center">
                        <h2 id="Projects">PROJECTS DEVELOPED</h2>
                        <div className="grid row">
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/portfolio1"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">My Portfolio</h3>
                                <p>Building a portfolio to practice React and showcase my skills</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/Prison-Management-System"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Prison Management System</h3>
                                <p>Developed as part of DBMS project. using HTML, CSS, PHP, MySQL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/Online-Bank-Simulator"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Online Bank Simulator</h3>
                                <p>Designed in Java using concepts of Swing, AWT and MySQL.</p>
                            </div>

                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/IIIT-Kota-Website"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Institute Website</h3>
                                <p>First project of Engineering using HTML, CSS, Firebase connection</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/JSprojects"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Different JS projects</h3>
                                <p>Small JS projects to practice JavaScript</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* < Footer /> */}
        </div >
    )
};

export default Projects;