import React from "react";
import githubLogo from '../images/socialIcons/githublogo.png';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div>
                <section id="extra-features" class="extra-features pt-5 pb-5" style={{ backgroundColor: "#33383e" }}>
                    <div className="container text-center">
                        <h2 id="Projects">PROJECTS DEVELOPED</h2>
                        <div className="grid row">
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/Book-Monk"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Book Monk</h3>
                                <p>Building an online book store</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/The-Band"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">The Band</h3>
                                <p>Fictional Band website for booking tickets for a concert</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/Google-Calendar"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Google Calendar</h3>
                                <p>Application to manage users google calendar</p>
                            </div>

                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/exercise-tracker"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Exercise Tracker</h3>
                                <p>Building a Exercise Tracker using MERN stack</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/Predictionist"} ><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Predictionist</h3>
                                <p>Website for college reviews</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/portfolio"}><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Portfolio</h3>
                                <p>Website showcasing my portfolio</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/Weather-App"}><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Weather App</h3>
                                <p>Web app displaying current weather</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/movie-serial-info"}><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Movie Serial Info</h3>
                                <p>Web app to display information about movies and serials</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon">
                                    <i className="icon-diploma">
                                        <a href={"https://github.com/sureshmangs/markdown-previewer"}><img src={githubLogo} alt="logo" style={{ width: "50px", height: "50px" }} /></a>
                                    </i>
                                </div>
                                <h3 className="h5">Markdown Previewer</h3>
                                <p>React based Markdown Previewer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            < Footer />
        </div >
    )
};

export default Projects;