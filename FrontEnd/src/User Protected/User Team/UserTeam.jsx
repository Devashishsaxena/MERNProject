import React from 'react';
import UserHero from "../User Hero/UserHero";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import Img1 from '../Assets/img/team/team-1.jpg'
import Img2 from '../Assets/img/team/team-2.jpg'
import Img3 from '../Assets/img/team/team-3.jpg'
import Img4 from '../Assets/img/team/team-4.jpg'
import UserHeader from "../User Header/UserHeader";
import UserFooter from "../User Footer/UserFooter";

function UserTeam() {
    return (
        <React.Fragment>
            <UserHeader/>
            <UserHero />
            <Container fluid id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={Img1} className="img-fluid" /></div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div className="social">
                                        <a><Link to="https://twitter.com" target='_blank'><FaTwitter /></Link></a>
                                        <a><Link to="https://www.facebook.com" target='_blank'><FaFacebookF /></Link></a>
                                        <a><Link to="/https://www.instagram.com/" target='_blank'> <FaInstagram /></Link></a>
                                        <a><Link to="/https://www.skype.com/en/" target='_blank'><FaSkype /></Link></a>
                                        <a> <Link to="/https://in.linkedin.com/" target='_blank'><FaLinkedin /> </Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={Img2} className="img-fluid" /></div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div className="social">
                                        <a><Link to="https://twitter.com" target='_blank'><FaTwitter /></Link></a>
                                        <a><Link to="https://www.facebook.com" target='_blank'><FaFacebookF /></Link></a>
                                        <a><Link to="/https://www.instagram.com/" target='_blank'> <FaInstagram /></Link></a>
                                        <a><Link to="/https://www.skype.com/en/" target='_blank'><FaSkype /></Link></a>
                                        <a> <Link to="/https://in.linkedin.com/" target='_blank'><FaLinkedin /> </Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={Img3} className="img-fluid" /></div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div className="social">
                                        <a><Link to="https://twitter.com" target='_blank'><FaTwitter /></Link></a>
                                        <a><Link to="https://www.facebook.com" target='_blank'><FaFacebookF /></Link></a>
                                        <a><Link to="/https://www.instagram.com/" target='_blank'> <FaInstagram /></Link></a>
                                        <a><Link to="/https://www.skype.com/en/" target='_blank'><FaSkype /></Link></a>
                                        <a> <Link to="/https://in.linkedin.com/" target='_blank'><FaLinkedin /> </Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={Img4} className="img-fluid" /></div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <a><Link to="https://twitter.com" target='_blank'><FaTwitter/></Link></a>
                                        <a><Link to="https://www.facebook.com" target='_blank'><FaFacebookF/></Link></a>
                                        <a><Link to="/https://www.instagram.com/" target='_blank'> <FaInstagram/></Link></a>
                                        <a><Link to="/https://www.skype.com/en/" target='_blank'><FaSkype/></Link></a>
                                        <a> <Link to="/https://in.linkedin.com/" target='_blank'><FaLinkedin/> </Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <br/><br/>
            <UserFooter/>
        </React.Fragment>
    );
}

export default UserTeam;