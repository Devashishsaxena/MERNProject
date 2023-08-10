import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Modal } from "react-bootstrap";
import '../User Updates/Userupdate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Userupdate = ({ closeModal }) => {
    const object = {
        oldpass: "",
        password: "",
        confirms: ""
    }
    const [update, setUpdate] = useState(object)
    const [updateerror, setUpdateErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPass, setShowPass] = useState("password")
    const [oldp, setOldp] = useState("password")
    const [con, setCon] = useState("password")

    const handleSubmit = (event) => {
        setTimeout(function () {
            closeModal(false)
        }, 6000);
        event.preventDefault();
        setUpdateErrors(validate(update));
        setIsSubmit(true);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdate({ ...update, [name]: value.trim() })
    }
    const validate = (values) => {
        const errors = {};
        if (!values.oldpass) {
            errors.oldpass = "First Name is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (!values.confirms) {
            errors.confirms = "Comfirm Password is required!";
        }
        return errors;
    };
    const resetFunctions = () => {
        setUpdate(() => {
            return {
                oldpass: (""),
                password: (""),
                confirms: ("")

            }
        })
    }
    const onSetPassword = () => {
        if (showPass === 'password') {
            setShowPass('text')
        } else {
            setShowPass('password')
        }
    }

    const onSetOld = () => {
        if (oldp === 'password') {
            setOldp('text')
        } else {
            setOldp('password')
        }
    }
    const onSetCon = () => {
        if (con === 'password') {
            setCon('text')
        } else {
            setCon('password')
        }
    }

    useEffect(() => {
        if (Object.keys(updateerror).length === 0 && isSubmit) {
            const Url = process.env.REACT_APP_React_Url;
            axios.get(Url + "/fetch?email =" + localStorage.getItem("email") + "&password =" + update.oldpass).then((response) => {
                if (response.data.length != 0) {
                    if (update.password == update.confirms) {
                        let updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": update.confirms } };
                        axios.patch(Url + "/update", updateDetails).then((response) => {
                            toast.success("Update Success");
                            // setUpdate(() => {
                            //     return ({
                            //         oldpass: (""),
                            //         password: (""),
                            //         confirms: ("")
                            //     })
                            // })
                        })
                    }
                    else {
                        // setUpdate(() => {
                        //     return {
                        //         password: (""),
                        //         confirms: ("")
                        //     }
                        // })
                    }
                }

            }).catch((error) => {
                toast.error("Update Invalid");
                // setUpdate(() => {
                //     return ({
                //         oldpass: (""),
                //         password: (""),
                //         confirms: ("")
                //     })
                // })
            });
        }
    }, [update, updateerror, isSubmit]);
    return (
        <React.Fragment>
            <Modal
                show={true}>
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
                    <div className='popup-inner'>
                        <button className="close-btn" onClick={() => {closeModal(false)}}><AiFillCloseCircle style={{ position: "relative", bottom: "5", right: "5" }} size={20} /></button>
                    </div>
                    <div className='row  text-center'>
                        <div className="col-lg-12 py-6 px-5">
                            <h1 className="display-5 mb-4">Update Password</h1>
                            <form>
                                <div className='form-group login' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} id="basic-addon1">
                                    <label htmlFor='password' className='labe'>Old Password</label>
                                    <input name="oldpass" value={update.oldpass} type={oldp} onChange={handleChange} className="form-control inpu" />
                                    <div onClick={() => {onSetOld()}}>
                                        {oldp === 'password' &&
                                            <AiOutlineEyeInvisible className='mx-2' />}
                                        {oldp !== 'password' &&
                                            <AiOutlineEye className='mx-2' />}
                                    </div>
                                </div>
                                <span className="text-danger">
                                    {updateerror.oldpass}
                                </span>
                                <br /> <br />
                                <div className='form-group login' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} id="basic-addon1">
                                    <label htmlFor='password' className='labe'>New Password</label>
                                    <input name="password" value={update.password} type={showPass} onChange={handleChange} className="form-control inpu" />
                                    <div onClick={() => { onSetPassword() }}>
                                        {showPass === 'password' &&
                                            <AiOutlineEyeInvisible className='mx-2' />}
                                        {showPass !== 'password' &&
                                            <AiOutlineEye className='mx-2' />}
                                    </div>
                                </div>
                                <span className="text-danger">
                                    {updateerror.password}
                                </span>
                                <br /><br />
                                <div className='form-group login' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} id="basic-addon1">
                                    <label htmlFor='confirms' className='labe'>Re-type</label>
                                    <input name="confirms" value={update.confirms} type={con} onChange={handleChange} className="form-control inpu" />
                                    <div onClick={() => { onSetCon() }}>
                                        {con === 'password' &&
                                            <AiOutlineEyeInvisible className='mx-2' />}
                                        {con !== 'password' &&
                                            <AiOutlineEye className='mx-2' />}
                                    </div>
                                </div>
                                <span className="text-danger">
                                    {updateerror.confirms}
                                </span>
                                <br /> <br />
                                <button htmlType="button" onClick={handleSubmit} className="btn btn-success">Submit</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button htmlType="button" onClick={resetFunctions} className="btn btn-danger">Reset</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button htmlType="button" onClick={() => {closeModal(false) }} className="btn btn-secondary">Close</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default Userupdate;


