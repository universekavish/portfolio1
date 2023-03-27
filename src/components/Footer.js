import React from "react";
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return(
        <div id="footer" className="container-fluid bg-dark">
            <div className="row text-center d-flex justify-content-center pt-5 ">
                <div className="col-md-2 mb-3">
                    <h6 className="font-weight-bold">
                        <Link to="/about" className="footerLink">ABOUT</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-3">
                    <h6 className="font-weight-bold">
                        <Link to="/projects" className="footerLink">PROJECTS</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-3">
                    <h6 className="font-weight-bold text-decotation-none">
                        <Link to="/resume" className="footerLink">RESUME</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-3">
                    <h6 className="font-weight-bold">
                        <Link to="/contact" className="footerLink">CONTACT</Link>
                    </h6>
                </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-5 ">
                <div className="row justify-content-md-center">
                    <p className="font-weight-bold " style={{ fontSize: '23px', color: 'white' }}>
                        Find me on <></>
                        <a
                            href="https://github.com/universekavish"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a><></>
                        <a
                            href="https://www.linkedin.com/in/kavishboyal/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillLinkedin />
                        </a><></>
                        <a
                            href="https://www.instagram.com/oneclumsybear"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a><></>
                        <a
                            href="https://twitter.com/kavish_boyal"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillTwitterCircle />
                        </a><></>
                    </p>
                </div>
                <div className="col-md-auto">
                    <p className="font-weight-bold " style={{ fontSize: '18px', color: 'white' }}>
                        <b>Made with ❤️ by Kavish</b>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;