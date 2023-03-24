import React from "react";

const Social = () => {
    return (
        <div >

            <div className="page-footer font-small  pt-5 pb-5 bg-dark">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/sureshmangs3" target="_blank" rel="noopener noreferrer">
                                <i id="social-fb" className="fa fa-facebook-square fa-2x social"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/sureshmangs" target="_blank" rel="noopener noreferrer">
                                <i id="social-g" class="fa fa-github fa-2x social"></i>
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/suresh_mangs7/" target="_blank" rel="noopener noreferrer">
                                <i id="social-ig" class="fa fa-instagram fa-2x social"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://in.linkedin.com/in/suresh-mangs-2552a3186" target="_blank" rel="noopener noreferrer">
                                <i id="social-li" class="fa fa-linkedin-square fa-2x social"></i>
                            </a>
                        </li>

                        <li className="list-inline-item">
                            <a href="https://stackoverflow.com/users/11398996/suresh-mangs" target="_blank" rel="noopener noreferrer">
                                <i id="social-so" class="fa fa-stack-overflow fa-2x social"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Social;