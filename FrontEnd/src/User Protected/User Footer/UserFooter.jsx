import React from 'react';
import { Container } from 'react-bootstrap';
function UserFooter() {
    return (
        <React.Fragment>
            <Container fluid id="footer">
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

export default UserFooter;