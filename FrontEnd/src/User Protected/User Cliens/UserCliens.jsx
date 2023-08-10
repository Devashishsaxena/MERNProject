import React from 'react';
import { Container } from 'react-bootstrap';
import img2 from "../Assets/img/clients/client-1.png"
import img3 from "../Assets/img/clients/client-2.png"
import img4 from "../Assets/img/clients/client-3.png"
import img5 from "../Assets/img/clients/client-4.png"
import img6 from "../Assets/img/clients/client-5.png"
import img7 from "../Assets/img/clients/client-6.png"
function UserCliens() {
    return (
        <React.Fragment>
            <Container fluid id="clients" className="clients section-bg">
                <div className="container">
                    <div className="row" data-aos="zoom-in">
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img2} className="img-fluid" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img3} className="img-fluid" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img4} className="img-fluid" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img5} className="img-fluid" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img6} className="img-fluid" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img7} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Container>
            
        </React.Fragment>
    );
}

export default UserCliens;