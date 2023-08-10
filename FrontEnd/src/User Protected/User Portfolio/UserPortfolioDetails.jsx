import React from 'react';
import './PortfolioDetails.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Img1 from "../assets/img/portfolio/portfolio-details-1.jpg"
import Img2 from "../assets/img/portfolio/portfolio-details-2.jpg"
import Img3 from "../assets/img/portfolio/portfolio-details-3.jpg"
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
function UserPortfolioDetails() {
    return (
        <React.Fragment>
            <Container fluid id="header" className="fixed-top header-inner-pages">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a><Link to="/">Business Project</Link></a></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="nav-link scrollto"> 
                                <Link to="/hero">Home</Link>
                                </a>
                                </li>
                            <li>
                                <a className="nav-link scrollto"> 
                                <Link to="/about">About</Link>
                                </a>
                                </li>
                            <li>
                                <a className="nav-link scrollto"> 
                                <Link to="/services">Services</Link>
                                </a>
                                </li>
                            <li>
                                <a className="nav-link  active scrollto" >
                                    <Link to="/portfolio">Portfolio</Link>
                                    </a>
                                    </li>
                            <li>
                                <a className="nav-link scrollto">
                                     <Link to="/team">Team</Link>
                                     </a>
                                     </li>
                            <li className="dropdown">
                                <a><Link to="/"><span>Drop Down</span></Link> <AiOutlineDown/></a>
                                <ul>
                                    <li><a><Link to="/">Drop Down 1</Link></a></li>
                                    <li className="dropdown"><a><Link to="/"><span>Deep Drop Down</span> <AiOutlineRight/></Link></a>
                                        <ul>
                                            <li><a><Link to="/">Deep Drop Down 1</Link></a></li>
                                            <li><a><Link to="/">Deep Drop Down 2</Link></a></li>
                                            <li><a><Link to="/">Deep Drop Down 3</Link></a></li>
                                            <li><a><Link to="/">Deep Drop Down 4</Link></a></li>
                                            <li><a><Link to="/">Deep Drop Down 5</Link></a></li>
                                        </ul>
                                    </li>
                                    <li><a><Link to="/">Drop Down 2</Link></a></li>
                                    <li><a><Link to="/">Drop Down 3</Link></a></li>
                                        <li><a><Link to="/">Drop Down 4</Link></a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" ><Link to="/contact">Contact</Link></a></li>
                            <li><a className="getstarted scrollto">< Link to="/about">Get Started</Link></a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </Container>







                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><a><Link to="/App">Home</Link></a></li>
                            <li>Portfolio Details</li>
                        </ol>
                        <h2>Portfolio Details</h2>

                    </div>
                </section>

       
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">

                                        <div className="swiper-slide">
                                        <img src={ Img1} />
                                        </div>

                                        <div className="swiper-slide">
                                        <img src={Img2} />
                                        </div>

                                        <div className="swiper-slide">
                                        <img src={{ Img3 }} />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a><Link to="/">www.example.com</Link></a></li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>This is an example of portfolio detail</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
}

export default UserPortfolioDetails;
