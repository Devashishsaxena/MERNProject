import React from 'react';
import Hero from "../Hero/Hero";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCheck2All } from 'react-icons/bs';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function About() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <br/><br/><br/>
            <Container fluid id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><BsCheck2All color="blue" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><BsCheck2All color="blue" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><BsCheck2All color="blue" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
                <a className="btn-learn-more"><Link to="/" style={{ textDecoration: "none" }} >Learn More</Link></a>
          </div>
        </div>

      </div>
        </Container>
        <br /><br /><br />
        <Footer/>
        </React.Fragment>
    );
}

export default About;