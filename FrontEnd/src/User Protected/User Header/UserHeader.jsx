import React, { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import Img1 from '../Assets/img/logo.png'
import { Container, Nav } from 'react-bootstrap';
import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai';
import Userupdate from "../User Updates/Userupdate";
import { FaBars, FaTimes } from 'react-icons/fa'


function UserHeader() {
    const [up, setUp] = useState(false);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <React.Fragment>
            <Container fluid id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo" ><a><Link to="/uapp" style={{ textDecoration: "none" }}><img src={Img1} width={40} height={40} className='mx-4' />Business Project</Link></a></h1>
                    <Nav id="navbar" className="navbar">
                        <div className='hamburger' onClick={handleClick}>
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"} style={{ textDecoration: "none" }} >
                            <li><a className="nav-link scrollto active" ><Link to="/uapp" style={{ textDecoration: "none" }} >UserHome</Link></a></li>
                            <li><a className="nav-link scrollto"><Link to="/uapp/userabout" style={{ textDecoration: "none" }}>UserAbout</Link></a></li>
                            <li className="dropdown"><a><Link to="/uapp" style={{ textDecoration: "none" }}><span>UserContent</span> <AiOutlineDown className='mx-2' /></Link></a>
                                <ul style={{ textDecoration: "none" }}>
                                    <li className="dropdown"><a className="nav-link scrollto"><Link to="/uapp/userservices" style={{ textDecoration: "none" }}><AiOutlineLeft className='mx-1' /><span>UserServices</span></Link></a>
                                        <ul>
                                            <li><a><Link to="/uapp/userservices" style={{ textDecoration: "none" }}>Web Design</Link></a></li>
                                            <li><a><Link to="/uapp/userservices" style={{ textDecoration: "none" }}>Web Development</Link></a></li>
                                            <li><a><Link to="/uapp/userservices" style={{ textDecoration: "none" }}>Product Managment</Link></a></li>
                                            <li><a><Link to="/uapp/userservices" style={{ textDecoration: "none" }}>Marketing</Link></a></li>
                                            <li><a><Link to="/uapp/userservices" style={{ textDecoration: "none" }}>Graphic Design</Link></a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link scrollto"><Link to="/uapp/userportfolio" style={{ textDecoration: "none" }}>UserPortfolio</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/uapp/userteam" style={{ textDecoration: "none" }}>UserTeam</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/uapp/usercontact" style={{ textDecoration: "none" }}>UserContact</Link></a></li>
                                    <li><a className="nav-link scrollto"><Link to="/uapp/userfaq" style={{ textDecoration: "none" }}>UserFAQ</Link></a></li>
                                </ul>
                            </li>
                            <ul style={{ textDecoration: "none" }}>
                                <li className="dropdown"><a className="nav-link scrollto"><Link to="/uapp" style={{ textDecoration: "none" }}><span>My Account</span><AiOutlineDown className='mx-2' /></Link></a>
                                    <ul>
                                        <li>
                                            <button htmlType="button" className="btn"> <Link to="/" style={{ textDecoration: "none" }}>Sign Out</Link></button>
                                        </li>
                                        <li>
                                            <button htmlType="button" onClick={() => { setUp(true) }} className="btn" >
                                                <span style={{ fontSize: "15px", marginLeft: "20px", fontWeight: "500" }}>Change Password </span>
                                            </button>
                                            {
                                                up && <Userupdate closeModal={setUp} />
                                            }
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <Outlet/>
                    </Nav>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default UserHeader;