import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
function UserCta() {
    return (
        <React.Fragment>
            <Container fluid id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle"><Link to="/uapp/usercontact" style={{ textDecoration: "none" }} >Call To Action</Link></a>
                        </div>
                    </div>

                </div>
            </Container>
        </React.Fragment>
    );
}

export default UserCta;