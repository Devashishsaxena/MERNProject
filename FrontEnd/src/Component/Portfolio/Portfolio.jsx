import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { AiOutlinePlus } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import Hero from '../Hero/Hero';
import Footer from "../Footer/Footer";
import Img1 from '../Assets/img/portfolio/portfolio-1.jpg';
import Img2 from '../Assets/img/portfolio/portfolio-2.jpg';
import Img3 from '../Assets/img/portfolio/portfolio-3.jpg';
import Img4 from '../Assets/img/portfolio/portfolio-4.jpg';
import Img5 from '../Assets/img/portfolio/portfolio-5.jpg';
import Img6 from '../Assets/img/portfolio/portfolio-6.jpg';
import Img7 from '../Assets/img/portfolio/portfolio-7.jpg';
import Img8 from '../Assets/img/portfolio/portfolio-8.jpg';
import Img9 from '../Assets/img/portfolio/portfolio-9.jpg';
import Header from "../Header/Header";

function Portfolio() {
    return (
        <React.Fragment>
            <Header/>
            <Hero />
            <br/><br/><br/>
            <Container fluid id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-img"><img src={Img1} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">< Link to={Img1} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details"><Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img"><img src={Img2} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3">< Link to={Img2} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-img"><img src={Img3} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2">< Link to={Img3} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src={Img4} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2">< Link to={Img4} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img"><img src={Img5} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2">< Link to={Img5} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-img"><img src={Img6} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3">< Link to={Img6} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src={Img7} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link"  title="Card 1">< Link to={Img7} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-img"><img src={Img8} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link"  title="Card 3">< Link to={Img8} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details">< Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-img"><img src={Img9} className="img-fluid" /></div>
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link"  title="Web 3">< Link to={Img9} ><AiOutlinePlus/></Link></a>
                                <a className="details-link" title="More Details"><Link to="/PortfolioDetails" ><BsLink45Deg /></Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <br /><br /><br />
            <Footer/>
        </React.Fragment>
    );
}

export default Portfolio;