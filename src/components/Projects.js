import React from "react";
import githubLogo from '../images/socialIcons/githublogo.png';

const Projects = () => {
    return (
        <div>
            <div id="project">
                <section id="extra-features" className="extra-features pt-5 pb-5">
                    <div className="container text-center">
                        <h2 id="Projects">PROJECTS DEVELOPED</h2>
                        <h3 id="Projects2">(For github repo of the project, please click respective github logo)</h3>
                        <div className="grid row" id="projects1" style={{ color: "#212020" }}>
                        <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/AI-image-generation-app"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">MERN Stack AI Image Generation App</h3>
                                <p>Built an innovative image generation app using MERN Stack and OpenAI API.</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/portfolio1"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">My Portfolio</h3>
                                <p>Built a portfolio to practice React and showcase my skills.</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/take-notes-app"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Notes App</h3>
                                <p>Built a frontend of a notes App using React JS.</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/universekavish/JSprojects"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Different JS projects</h3>
                                <p>Small JS projects to practice JavaScript.</p>
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
                        </div>
                    </div>
                </section>
            </div>
            {/* < Footer /> */}
        </div >
    )
};

export default Projects;