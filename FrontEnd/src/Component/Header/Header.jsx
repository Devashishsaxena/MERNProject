import React, { useState } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Img1 from '../Assets/img/logo.png'
import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai';
import Login from "../Login/Login";
import Register from "../Register/Register";
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
    const [pop, setPop] = useState(false);
    const [reg, setReg] = useState(false);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <React.Fragment>
            <Container fluid id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo"><a><Link to="/" style={{ textDecoration: "none" }}><img src={Img1} width={40} height={40} className='mx-4' />Business Project</Link></a></h1>
                    <Nav id="navbar" className="navbar">
                        <div className='hamburger' onClick={handleClick}>
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"} style={{ textDecoration: "none" }}>
                            <li><a className="nav-link scrollto active" ><Link to="/" style={{ textDecoration: "none" }} >Home</Link></a></li>
                            <li><a className="nav-link scrollto"><Link to="/about" style={{ textDecoration: "none" }}>About</Link></a></li>
                            <li className="dropdown"><a><Link to="/" style={{ textDecoration: "none" }}><span>Content</span> <AiOutlineDown /></Link></a>
                                <ul style={{textDecoration: "none"}}>
                                    <li className="dropdown"><a className="nav-link scrollto"><Link to="/services" style={{ textDecoration: "none" }}><AiOutlineLeft className='mx-1' /><span>Services</span></Link></a>
                                        <ul>
                                            <li><a><Link to="/" style={{ textDecoration: "none" }}>Web Design</Link></a></li>
                                            <li><a><Link to="/" style={{ textDecoration: "none" }}>Web Development</Link></a></li>
                                            <li><a><Link to="/" style={{ textDecoration: "none" }}>Product Managment</Link></a></li>
                                            <li><a><Link to="/" style={{ textDecoration: "none" }}>Marketing</Link></a></li>
                                            <li><a><Link to="/" style={{ textDecoration: "none" }}>Graphic Design</Link></a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link scrollto"><Link to="/portfolio" style={{ textDecoration: "none" }}>Portfolio</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/team" style={{ textDecoration: "none" }}>Team</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/faq" style={{ textDecoration: "none" }}>FAQ</Link></a></li>
                                </ul>
                            </li>
                            <li ><span><button className='button_1' onClick={() => {setReg(true) }} style={{ backgroundColor: "#283A5AE6", border: "0px", marginLeft: "20px", color: "#FFF" }} >
                                Sign up
                            </button>
                            </span>
                                {
                                    reg && <Register closeModal={setReg} />
                                }
                            </li>
                            <li><span><button className='button_2' onClick={() => {setPop(true) }} style={{ backgroundColor: "#283A5AE6", border: "0px", marginLeft: "20px", color: "#FFF" }} >
                                Sign In
                            </button>
                            </span>
                                {
                                    pop && <Login closeModal={setPop} />
                                }
                            </li>
                        </ul>
                    </Nav>
                </div>
            </Container>
            
        </React.Fragment>
    );
}

export default Header;