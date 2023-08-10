import React,{useState,useEffect} from 'react';
import Hero from "../Hero/Hero";
import axios from "axios";
import { Container } from 'react-bootstrap';
import { BsGeoAlt, BsPhone } from 'react-icons/bs'
import { SlEnvolope } from 'react-icons/sl'
import Footer from "../Footer/Footer";
import '../Contact/Contact.css'
import Header from "../Header/Header";

function Contact() {
    const Cont = {
        name: "",
        email: "",
        contact: "",
        address: "",
        message: "",
    }

    const [contact, setContact] = useState(Cont)
    const [conerror, setConErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPass, setShowPass] = useState("password")
    const [output, setOutput] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setConErrors(validate(contact));
        setIsSubmit(true);
    }
    const resetFunctions = () => {
        setContact(() => {
            return {
                name: "",
                email: (""),
                contact: (""),
                address: (""),
                message: ("")
            }
        })
    }
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Your Name is required!";
        }
        if (!values.email) {
            errors.email = "Email ID is required!";
        }
        if (!values.contact) {
            errors.contact = "Contact No. is required!";
        }
        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.message) {
            errors.message = "Comment is required!";
        }
        return errors;
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value.trim() })
    }
    useEffect(() => {
        if (Object.keys(conerror).length === 0 && isSubmit) {
            const userDetails = { "name": contact.name, "email": contact.email, "contact": contact.contact, "address": contact.address, "message": contact.message };
            const Url = process.env.REACT_APP_React_Url_Contact;
            axios.post(Url + "/save", userDetails).then((response) => {
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [conerror, contact, isSubmit])
    return (
        <React.Fragment>
            <Header/>
            <Hero />
            <br /><br /><br />
            <Container fluid id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <BsGeoAlt />
                                    <h4>Location:</h4>
                                    <p>183,C-Special Gandhi Nagar Indore Madhya Pradesh</p>
                                </div>
                                <div className="email">
                                    <SlEnvolope />
                                    <h4>Email:</h4>
                                    <p>devashishsaxena1997@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <BsPhone />
                                    <h4>Call:</h4>
                                    <p>8085522189</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{ border: 0, width: "100%", height: "290px" }} allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form className="php-email-form" >
                                <div className="row">
                                    <div className="form-group col-md-6 contact_c">
                                        <label htmlFor="name" className='labe'>Your Name</label>
                                        <input htmlType="text" name="name" className="form-control inpu" onChange={handleChange} />      
                                    <span className="text-danger" >
                                        {conerror.name}
                                    </span>
                                    </div>
                                 
                                    <div className="form-group col-md-6 contact_c">
                                        <label htmlFor="name" className='labe'>Your Email</label>
                                        <input htmlType="email" className="form-control inpu" name="email" onChange={handleChange} />
                                    <span className="text-danger" >
                                        {conerror.email}
                                    </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 contact_c">
                                        <label htmlFor="name" className='labe'>Contact</label>
                                        <input htmlType="number" name="contact" className="form-control inpu" onChange={handleChange} />
                                    <span className="text-danger" >
                                        {conerror.contact}
                                    </span>
                                    </div>
                                    <div className="form-group col-md-6 contact_c">
                                        <label htmlFor="name" className='labe'>Address</label>
                                        <input htmlType="text" className="form-control inpu" name="address" onChange={handleChange} />
                                    <span className="text-danger" >
                                        {conerror.address}
                                    </span>
                                    </div>
                                </div>
                                <div className="form-group contact_c">
                                    <label htmlFor="name" className='labe'>Message</label>
                                    <textarea className="form-control inpu" name="message" rows="10" onChange={handleChange} ></textarea>
                                <span className="text-danger" >
                                    {conerror.message}
                                </span>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={handleSubmit} className='btn btn-primary mx-5'>Submit</button>
                                    <button type="button" onClick={resetFunctions} className='btn btn-danger'>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <br /><br /><br />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;