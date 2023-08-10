import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
function Pricing() {
    return (
        <React.Fragment>
            <Container fluid id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="box">
                                <h3>Free Plan</h3>
                                <h4><sup>$</sup>0<span>per month</span></h4>
                                <ul type="none">
                                    <li><BsCheckLg color = "Green"/> Quam adipiscing vitae proin</li>
                                    <li><BsCheckLg color = "Green"/> Nec feugiat nisl pretium</li>
                                    <li><BsCheckLg color = "Green"/> Nulla at volutpat diam uteera</li>
                                    <li className="na"><RxCross1 style={{ color: "#CCCCCC" }} /> <span style={{ color: "#CCCCCC" }}><s>Pharetra massa massa ultricies</s></span></li>
                                    <li className="na"><RxCross1 style={{ color: "#CCCCCC" }} /> <span style={{ color: "#CCCCCC" }}><s>Massa ultricies mi quis hendrerit</s></span></li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="box featured">
                                <h3>Business Plan</h3>
                                <h4><sup>$</sup>29<span>per month</span></h4>
                                <ul type="none">
                                    <li><BsCheckLg color = "Green"/> Quam adipiscing vitae proin</li>
                                    <li><BsCheckLg color = "Green"/> Nec feugiat nisl pretium</li>
                                    <li><BsCheckLg color = "Green"/> Nulla at volutpat diam uteera</li>
                                    <li><BsCheckLg color = "Green"/> Pharetra massa massa ultricies</li>
                                    <li><BsCheckLg color = "Green"/> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="box">
                                <h3>Developer Plan</h3>
                                <h4><sup>$</sup>49<span>per month</span></h4>
                                <ul type="none">
                                    <li><BsCheckLg color = "Green"/> Quam adipiscing vitae proin</li>
                                    <li><BsCheckLg color = "Green"/> Nec feugiat nisl pretium</li>
                                    <li><BsCheckLg color = "Green"/> Nulla at volutpat diam uteera</li>
                                    <li><BsCheckLg color = "Green"/> Pharetra massa massa ultricies</li>
                                    <li><BsCheckLg color = "Green"/> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="buy-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <br /><br />
        </React.Fragment>
    );
}

export default Pricing;