import React from 'react';
import { BiPlayCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Img1 from "../Assets/img/hero-img.png";
function UserHero() {
    return (
        <React.Fragment>
            <Container fluid id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a className="btn-get-started scrollto"><Link to="/about" style={{ textDecoration: "none" }}>Get Started</Link></a>
                                <a className="glightbox btn-watch-video"><Link to="https://www.youtube.com/watch?v=iI2Ua7QqoiM" target='_blank' style={{ textDecoration: "none" }}><BiPlayCircle  size={50}/><span>Watch Video</span></Link></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={Img1} className="img-fluid animated"  />
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default UserHero;