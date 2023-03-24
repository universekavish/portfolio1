import React from "react";
import Education from './Education';
import Footer from "./Footer";

const About = () => {
    return(
        <div>
            <div id='about' className="pb-5">
                <div className="container-fluid pt-5">
                    <div className="text-center">
                        <img src={require('../images/me.jpeg')} className="border border-dark rounded-circle mx-auto img-fluid d-block" style={{ width: "200px", height: "200px" }} alt="" />
                        <p id="aboutName" className="mt-5">Kavish Boyal</p>
                    </div>
                    <div className="row" >
                        <div className="col-lg-6 mx-auto">
                            <div className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                <p className="mb-0 mt-2 font-italic">"Currently Working as a Software Engineer. Tech Stack - Python, Django, Django RestAPI, ReactJS MongoDB, Postman"</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mx-auto">
                            <div className="text-center">
                                <a className="center-block" href={"https://drive.google.com/file/d/19aqE4f3a82QUuBTv98Hmq9N5Rk-GdGDF/view?usp=sharing"}>
                                    <button type="button" className="btn btn-primary center-block">RESUME</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Education />
            <Footer />
        </div>
    )
};

export default About;