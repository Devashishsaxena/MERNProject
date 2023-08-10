import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
function UserJoinletter() {
    const Initalization = {
        email: "",
    }
    const [forms, setForms] = useState(Initalization);
    const [formerror, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const Handlesumbit = (event) => {
        event.preventDefault();
        setFormErrors(validate(forms));
        setIsSubmit(true);
    }
    const validate = (values) => {
        const errors = {};
        const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email Id is required!";
        }
        else if (!Emailregex.test(values.email)) {
            errors.email = "This is not a valid email!";
        }
        return errors;
    };
    const InitalizationFunction = (event) => {
        const { name, value } = event.target;
        setForms({ ...forms, [name]: value.trim() })
    }
    useEffect(() => {
        if (Object.keys(formerror).length === 0 && isSubmit) {
            const userDetails = { "email": forms.email, }
            const Url = process.env.REACT_APP_React_Url_User;
            axios.post(Url + "/save", userDetails).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [formerror, forms, isSubmit])
    return (
        <React.Fragment>
            <Container fluid id="footer">
                <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form>
                                    <div className="d-flex justify-content-between">
                                        <input type="email" onChange={InitalizationFunction} className="form-control" value={forms.email} name="email" />                                       
                                        <input type="button" onClick={Handlesumbit} className='btn btn-info rounded-pill text-white' value="Subscribe" />
                                    </div>
                                </form>
                                <br />
                                <span className="text-danger">
                                    {formerror.email}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </React.Fragment>
    );
}

export default UserJoinletter;