import React, { useState, useEffect } from 'react';
import './Register.css'
import { Modal } from "react-bootstrap";
import { AiFillCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = ({closeModal}) => {
    const Initalization = {
        fname: "",
        middle: "",
        lname: "",
        cname: "",
        wname: "",
        email: "",
        password: "",
        code: "",
        mobile: "",
        pincode: "",
        flat_no: "",
        address: "",
        land_mark: "",
        gender: "",
        country: "",
        state: "",
        city: ""
    };
    const [forms, setForms] = useState(Initalization);
    const [formerror, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [fullscreen] = useState(true);
    const [showPass, setShowPass] = useState("password")
    const Handlesumbit = (event) => {
        event.preventDefault();
        setFormErrors(validate(forms));
        setIsSubmit(true);
    }
    const resetFunction = () => {
        setForms(() => {
            return {
                fname: (""),
                middle: (""),
                lname: (""),
                cname: (""),
                wname: (""),
                email: (""),
                password: (""),
                code: (""),
                mobile: (""),
                pincode: (""),
                flat_no: (""),
                address: (""),
                land_mark: (""),
                gender: (""),
                country: (""),
                state: (""),
                city: ("")
            }
        })
    }
 
    const validate = (values) => {
        const errors = {};
        const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        var mobilecheck = /^[0-9]{10}$/;
        if (!values.fname) {
            errors.fname = "First Name is required!";
        }
        if (!values.lname) {
            errors.lname = "Last Name is required!";
        }
        if (!values.cname) {
            errors.cname = "Company Name is required!";
        }
        if (!values.wname) {
            errors.wname = "Website Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        else if (!Emailregex.test(values.email)) {
            errors.email = "This is not a valid email!";
        }

        if (!values.password) {
            errors.password = "Password  is required!";
        }
        if (!values.code) {
            errors.code = "Country-Code  is required!";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile No is required!";
        } else if (!mobilecheck.test(values.mobile)) {
            errors.mobile = "This is not valid phone number.";
        }
        if (!values.pincode) {
            errors.pincode = " Pincode  is required!";
        }
        if (!values.flat_no) {
            errors.flat_no = " flat No.  is required!";
        }
        if (!values.address) {
            errors.address = "Address  is required!";
        }
        if (!values.land_mark) {
            errors.land_mark = "Land Mark is required!";
        }
        if (!values.gender) {
            errors.gender = "Gender is required!";
        }
        if (!values.country) {
            errors.country = "Country  is required!";
        }
        if (!values.state) {
            errors.state = "State  is required!";
        }
        if (!values.city) {
            errors.city = "City  is required!";
        }
        return errors;
    };
    const InitalizationFunction = (event) => {
        const { name, value } = event.target;
        setForms({ ...forms, [name]: value.trim() })
    }
    const InitalizationS = (event) => {
        const { name, value } = event.target;
        setForms({ ...forms, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(formerror).length === 0 && isSubmit) {
            const userDetails = { "fname": forms.fname, "lname": forms.lname, "middle": forms.middle, "cname": forms.cname, "wname": forms.wname, "email": forms.email, "code": forms.code, "flat_no": forms.flat_no, "land_mark": forms.land_mark, "password": forms.password, "mobile": forms.mobile, "address": forms.address, "city": forms.city, "country": forms.country, "state": forms.state, "pincode": forms.pincode, "gender": forms.gender }
            const Url = process.env.REACT_APP_React_Url;
            axios.post(Url + "/save", userDetails).then((res) => {
                setTimeout(function () {
                    closeModal(false)
                }, 6000);
                toast.success("Register Success");
            }).catch((error) => {
                toast.error("Register Invalid");
            })
        }
     
    }, [formerror, forms, isSubmit])
    const onSetPassword = () => {
        if (showPass === 'password') {
            setShowPass('text')
        } else {
            setShowPass('password')
        }
    }
 
    return (
        <React.Fragment >

            <Modal fullscreen={fullscreen} show={true}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
                <Modal.Body>
                    <div className="container-fluid" style={{ paddingTop: "0px", marginTop: "0px" }}>
                        <div className='popup'>
                            <div className='popup-inner'>
                                <button className="close-btn2" onClick={() => { closeModal(false) }}><AiFillCloseCircle style={{ position: "relative", bottom: "5", right: "5" }} size={20} /></button>
                            </div>
                        </div>
                        <div className="card w-75 mx-auto my-5">
                            <form onSubmit={Handlesumbit}>
                                <div className="card-header text-center" style={{ backgroundColor: "#090849f7", color: "#FFFFFF", fontFamily: 'Dancing Script cursive' }}><h5>Register</h5><div>
                                    <div className="card-body" style={{ backgroundColor: "#333583" }}>
                                        <div className="row g-3">
                                            <div className="col-4 main">
                                                <label htmlFor='fname' className='lab'>First Name</label>
                                                <input type="text" name="fname" value={forms.fname} onChange={InitalizationFunction}
                                                    className="form-control inp" />
                                                <br />
                                                <span className="text-danger" >
                                                    {formerror.fname}
                                                </span>
                                            </div>
                                            <div className="col-4 main">
                                                <label htmlFor='middle' className='lab'>Middle Name</label>
                                                <input type="text" name="middle" value={forms.middle} onChange={InitalizationFunction} className="form-control inp" />
                                                <br />
                                                <span className="text-danger">
                                                    {formerror.middle}
                                                </span>
                                            </div>
                                            <div className="col-4 main">
                                                <label htmlFor='lname' className='lab'>Last Name</label>
                                                <input type="text" name="lname" value={forms.lname} onChange={InitalizationFunction} className="form-control inp" />
                                                <br />
                                                <span className="text-danger">
                                                    {formerror.lname}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-2">
                                            <div className="col-4 main">
                                                <label htmlFor='cname' className='lab'>Company Name</label>
                                                <input type="text" name="cname" value={forms.cname} onChange={InitalizationS} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.cname}
                                                </span>
                                            </div>
                                            <div className='col-4'></div>
                                            <div className="col-4 main">
                                                <label htmlFor='wname' className='lab'>Project Name</label>
                                                <input type="text" name="wname" value={forms.wname} onChange={InitalizationS} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.wname}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-2">
                                            <div className="col-1 main">
                                                <label htmlFor='code' className='lab'>+91</label>
                                                <input type="number" name="code" value={forms.code} onChange={InitalizationFunction} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.code}
                                                </span>
                                            </div>
                                            <div className="col-3 main">
                                                <label htmlFor='mobile' className='lab'>Contact Number</label>
                                                <input type="number" name="mobile" value={forms.mobile} onChange={InitalizationFunction} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.mobile}
                                                </span>
                                            </div>
                                            <div className="col-4 main">
                                                <label htmlFor='email' className='lab'>Email Id</label>
                                                <input type="email" name="email" value={forms.email} onChange={InitalizationFunction} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.email}
                                                </span>
                                            </div>
                                            <div className="col-4 main"> 
                                                <div className='input-group-text form-input' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }}  id="basic-addon1">
                                                    <label htmlFor='password' className='lab'>Password</label>
                                                    <input name="password" value={forms.password} type={showPass} onChange={InitalizationS} className="form-control inp" />

                                                    <div onClick={() => { onSetPassword() }}>
                                                        {showPass === 'password' &&
                                                            <AiOutlineEyeInvisible className='mx-2' />}
                                                        {showPass !== 'password' &&
                                                            <AiOutlineEye className='mx-2' />}
                                                    </div>
                                                </div>
                                                <br />
                                                <span className="text-danger">
                                                    {formerror.password}
                                                </span>
                                            </div>
                                            <div className="row g-3 mt-2">
                                                <div className='col-1 main'>
                                                    <div className="form-group">
                                                        <label htmlFor='flat_no' className='lab'>Flat No</label>
                                                        <input type="number" name="flat_no" value={forms.flat_no} onChange={InitalizationFunction} className="form-control inp" />
                                                        <span className="text-danger">
                                                            {formerror.flat_no}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='col-3 main'>
                                                    <div className="form-group">
                                                        <label htmlFor='address' className='lab'>Address</label>
                                                        <textarea type="text" name="address" value={forms.address} onChange={InitalizationFunction} className="form-control inp"></textarea>
                                                        <span className="text-danger">
                                                            {formerror.address}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='col-4'></div>
                                                <div className="col-4 main">
                                                    <label htmlFor='land_mark' className='lab'>Land Mark</label>
                                                    <input type="text" name="land_mark" value={forms.land_mark} onChange={InitalizationS} className="form-control inp" />
                                                    <span className="text-danger">
                                                        {formerror.land_mark}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row g-3 mt-2'>
                                            <div className="col-4 main">
                                                <label htmlFor='pincode' className='lab'>Pincode</label>
                                                <input type="number" name="pincode" value={forms.pincode} onChange={InitalizationFunction} className="form-control inp" />
                                                <span className="text-danger">
                                                    {formerror.pincode}
                                                </span>
                                            </div>
                                            <div className='col-4'></div>
                                            <div className="col-4 main">
                                                <label htmlFor='gender' className='lab'>Gender</label>
                                                <select className="form-select inp" name="gender" value={forms.gender} onChange={InitalizationFunction} >
                                                    <option selected>Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <span className="text-danger">
                                                    {formerror.gender}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-2">
                                            <div className="col-4 main">
                                                <label htmlFor='country' className='lab'>Country</label>
                                                <select className="form-select inp" name="country" value={forms.country} onChange={InitalizationFunction} >
                                                    <option selected> Select Country</option>
                                                    <option value="india">India</option>
                                                    <option value="australia">Australia</option>
                                                    <option value="america">America</option>
                                                    <option value="germany">Germany</option>
                                                    <option value="russia">Russia</option>
                                                    <option value="netherland">Netherland</option>
                                                </select>
                                                <span className="text-danger">
                                                    {formerror.country}
                                                </span>
                                            </div>
                                            <div className="col-4 main">
                                                <label htmlFor='state' className='lab'>State</label>

                                                <select className="form-select inp" name="state" value={forms.state} onChange={InitalizationFunction} >
                                                    <option selected> Select state</option>
                                                    <option value="madhyapradesh">Madhya Pradesh</option>
                                                    <option value="uttarpradesh">Uttar Pradesh</option>
                                                    <option value="uttarakhand">Uttarakhand</option>
                                                </select>
                                                <span className="text-danger">
                                                    {formerror.state}
                                                </span>
                                            </div>
                                            <div className="col-4 main">
                                                <label htmlFor='city' className='lab'>City</label>
                                                <select className="form-select inp" name="city" value={forms.city} onChange={InitalizationFunction} >
                                                    <option selected >Select City</option>
                                                    <option value="indore">Indore</option>
                                                    <option value="bhopal">Bhopal</option>
                                                    <option value="dewas">Dewas</option>
                                                </select>
                                                <span className="text-danger">
                                                    {formerror.city}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row g-3 mt-2">
                                            <div className="col main">
                                                <div className="form-group text-start">
                                                    <input type="checkbox" />
                                                    <label className='mx-2'>I have agreed upon terms of use andvacy policy.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-5">
                                            <div className="form-group">
                                                <button htmlType="submit" className="btn btn-success">Submit</button>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="form-group">
                                                <button htmlType="button" onClick={resetFunction} className="btn btn-danger">Reset</button>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button htmlType="button" onClick={() => { closeModal(false) }} className="btn btn-secondary">Close</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>

    );
}

export default Register;