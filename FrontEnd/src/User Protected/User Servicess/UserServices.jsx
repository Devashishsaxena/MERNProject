import React from 'react';
import UserHero from "../User Hero/UserHero";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AiOutlineDribbble } from "react-icons/ai";
import { BiSolidFile, BiTachometer, BiSolidLayer } from "react-icons/bi";
import UserHeader from "../User Header/UserHeader";
import UserFooter from "../User Footer/UserFooter";

function UserServices() {
    return (
        <React.Fragment>
            <UserHeader/>
            <UserHero />
            <Container fluid id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><AiOutlineDribbble style={{ color: "#47b2e4" }} size={36} /></div>
                                <h4><a ><Link to="/services" style={{ textDecoration: "none" }} >Lorem Ipsum</Link></a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><BiSolidFile style={{ color: "#47b2e4" }} size={36} /></div>
                                <h4><a ><Link to="/services" style={{ textDecoration: "none" }} >Sed ut perspici</Link></a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><BiTachometer style={{ color: "#47b2e4" }} size={36} /></div>
                                <h4><a ><Link to="/services" style={{ textDecoration: "none" }} >Magni Dolores</Link></a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><BiSolidLayer style={{ color: "#47b2e4" }} size={36} /></div>
                                <h4><a ><Link to="/services" style={{ textDecoration: "none" }} >Nemo Enim</Link></a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
                <br/><br/>
            <UserFooter />
        </React.Fragment>

    );
}

export default UserServices;