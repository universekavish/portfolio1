import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from '../assets/Kavish_Boyal_Resume.pdf';
import Button from 'react-bootstrap/Button';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/universekavish/portfolio1/main/src/assets/Kavish_Boyal_Resume.pdf";

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    
    return(
        <div>
            <Navbar />
            <div><p></p></div>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </div>
            </div>
            <div><p></p></div>
            <div className="row justify-content-md-center">
                <Document file={resumeLink} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </div>
            <div><p></p></div>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </div>
            </div>

        </div>
    )
};

export default Resume;