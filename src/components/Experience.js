import React from 'react';

const Experience = () => {
    return(
        <div className="container-fluid bg-dark py-5">
            <h2 id="Experience" className="text-center text-white mb-4">EXPERIENCE</h2>
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <ul className="timeline">
                        <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div className="timeline-arrow"></div>
                            <h1 className="h5 mb-0">Software Engineer</h1>
                            <h2 className="h5 mb-0">ASM Technologies LTD</h2>
                            <span className="small text-gray">
                                Nov. 2021 - Present
                            </span>
                            <p className="text-small mt-2 mb-0 font-weight-light">Client: CommScope, Product: Ruckus IoT controller.
• Working as a Full Stack Developer, Teck Stack ‑ Python, MongoDB, Django, DjangoREST framework, React JS, Flask, MQTT.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Experience;