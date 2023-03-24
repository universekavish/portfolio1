import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import firebase from 'firebase';

const Contact = () => {
    addMessage(e) {
        e.preventDefault();

        var firebaseConfig = {
            apiKey:process.REACT_APP_FIREBASE_API_KEY,
            authDomain: "XXXXXXXXXXXXXXXXXX",
            databaseURL: "XXXXXXXXXXXXXXXXXX",
            projectId: "XXXXXXXXXXXXXXXXXX",
            storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
            messagingSenderId: "XXXXXXXXXXXXXXX",
            appId: "XXXXXXXXXXXXXXXXXXXXXXX",
            measurementId: "XXXXXXXXXXXX"
        };

    }
    
    return(
        <div>
            <h1>Contact</h1>
        </div>
    )
};

export default Contact;