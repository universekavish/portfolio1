import React, { useState } from "react";

import { db } from "../firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessaage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        
        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert("Thanks for dropping a message, will get back to you soon...😊")
            setLoader(false);
        })
        .catch(error =>{
            alert(error.message);
            setLoader(false);
        });

        setName('');
        setEmail('');
        setMessaage('');
    }

    return(
        <div>
            <div id="contact">
                <div className="container contact-form pt-5 pb-5">
                    <div className="contact-image">
                        <img src={require('../images/message.png')} className="rounded-circle mx-auto img-fluid d-block" style={{ width: "200px", height: "200px" }} alt="" />
                    </div>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <h3 className="mb-3" style={{textAlign: "center"}}><b>Drop a Message</b></h3>
                        <div className="alert">Your message has been sent</div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        style={{ backgroundColor:'#d9d9d9' }}
                                    />
                                </div>
                                <div><p></p></div>
                                <div className="form-group">
                                    <input 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ backgroundColor:'#d9d9d9' }}
                                    />
                                </div>
                                <div><p></p></div>
                                {/* <div className="form-group">
                                    <input type="text" name="phone" className="form-control" placeholder="Phone Number" id="phone" />
                                </div> */}
                                <div className="form-group">
                                    <textarea 
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessaage(e.target.value)}
                                    style={{ width: "100%", height: "150px", backgroundColor:'#d9d9d9' }}></textarea>
                                </div>
                                <div><p></p></div>
                            </div>
                        </div>
                        <div>
                            <div className="form-group" style={{textAlign:"center"}}>
                                <button type="submit" name="submit" className="btn btn-primary" style={{background : loader ? "#ccc" : "rgb(2, 2, 10)"}}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
};

export default Contact;