import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <React.Fragment>
            <Container fluid id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Business</h3>
                                <p>
                                    123 ,<br />
                                    Abhay Prashal building, <br />
                                     B-Wing,<br />
                                    Race Course Road, <br />
                                    Indore,<br />
                                    M.P<br/>

                                    <strong>Phone:</strong>7471128436<br />
                                    <strong>Email:</strong><Link to="http://www.gmail.com" target="_blank" style={{ textDecoration: "none",color:"#5E5E5E" }} ><h6>info@universalinformatics.com</h6></Link><br />
                                    <strong>Website:</strong><Link to="http://www.universalinformatics.com" target="_blank" style={{ textDecoration: "none",color:"#5E5E5E" }} ><h6 >Universal Infomatics</h6></Link><br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Home</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/about" style={{ textDecoration: "none" }} >About us</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/services" style={{ textDecoration: "none" }} >Services</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Terms of service</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Privacy policy</Link></a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Web Design</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Web Development</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Product Management</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Marketing</Link></a></li>
                                    <li><AiOutlineRight color='blue' /> <a><Link to="/" style={{ textDecoration: "none" }} >Graphic Design</Link></a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a classNameName='mx-2'><Link to="https://twitter.com" target='_blank'><FaTwitter size={20} /></Link></a>
                                    <a classNameName='mx-2'><Link to="https://www.facebook.com" target='_blank'><FaFacebookF size={20} /></Link></a>
                                    <a classNameName='mx-2'><Link to="/https://www.instagram.com/" target='_blank'> <FaInstagram size={20} /></Link></a>
                                    <a classNameName='mx-2'><Link to="/https://www.skype.com/en/" target='_blank'><FaSkype size={20} /> </Link></a>
                                    <a classNameName='mx-2'> <Link to="/https://in.linkedin.com/" target='_blank'><FaLinkedin size={20}  /> </Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>BUSINESS PROJECT</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a>Devashish Saxena</a>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Footer;