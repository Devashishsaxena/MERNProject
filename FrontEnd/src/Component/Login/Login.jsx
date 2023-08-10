
import React, {useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { AiFillCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Modal } from "react-bootstrap";
import '../Login/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ closeModal }) => {
  const navigate = useNavigate();
  const object = {
    email: "",
    password: ""
  }
  
  const [login, setLogin] = useState(object)
  const [logerror, setLogErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPass, setShowPass] = useState("password")
  const [output, setOutput] = useState();

  const handleSubmit = (event) => {
  
    event.preventDefault();
    setLogErrors(validate(login));
    setIsSubmit(true);
    setTimeout(function () {
      closeModal(false)
    }, 6000);
  }
  const resetFunctions = () => {
    setLogin(() => {
      return {
        email: (""),
        password: ("")
      }
    })
  }
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Id is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value.trim() })
  }
  useEffect(() => {
    if (Object.keys(logerror).length === 0 && isSubmit) {
      const userDetails = { "email": login.email, "password": login.password };
      const Url = process.env.REACT_APP_React_Url;
      axios.post(Url + "/login", userDetails).then((response) => {
        toast.success("Login Success");
        var obj = response.data.BussinessDetails
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("fname", obj.fname)
        localStorage.setItem("middle", obj.middle)
        localStorage.setItem("lname", obj.lname)
        localStorage.setItem("cname", obj.cname)
        localStorage.setItem("wname", obj.wname)
        localStorage.setItem("email", obj.email)
        localStorage.setItem("code", obj.code)
        localStorage.setItem("mobile", obj.mobile)
        localStorage.setItem("flat_no", obj.flat_no)
        localStorage.setItem("address", obj.address)
        localStorage.setItem("land_mark", obj.land_mark)
        localStorage.setItem("gender", obj.gender)
        localStorage.setItem("country", obj.country)
        localStorage.setItem("state", obj.state)
        localStorage.setItem("city", obj.city)
        localStorage.setItem("info", obj.info)
        localStorage.setItem("role", obj.role)
        obj.role = "Bussiness" ? navigate("/uapp") : navigate("/aapp")
      }).catch((error) => {
        setOutput("Invalid User")
        toast.error("Login invalid");
      });
    }
   
  }, [logerror, login, isSubmit])
  const onSetPassword = () => {
    if (showPass === 'password') {
      setShowPass('text')
    } else {
      setShowPass('password')
    }
  }

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
              <button className="close-btn" onClick={() => { closeModal(false) }}><AiFillCloseCircle style={{ position: "relative", bottom: "5", right: "5" }} size={20} /></button>
            </div>
          
       
          <div className='row  text-center'>
            <div className="col-lg-12 py-6 px-5">
              <h1 className="display-5 mb-4">login</h1>
              <form>
                <div className="form-group login">
                  <label htmlFor="email" className='labe'>Email Id:</label>
                  <input htmlType="email" className="form-control inpu" name='email' defaultValue={login.email} onChange={handleChange} />
                </div>
                <span className="text-danger" >
                  {logerror.email}
                </span>
                <br />
                <div className='input-group-text form-input login' style={{ color: "black", borderLeft: "none", marginTop: "4px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderRightt: "none" }} id="basic-addon1">
                  <label htmlFor='password' className='labe'>Password</label>
                  <input name="password" value={login.password} type={showPass} onChange={handleChange} className="form-control inpu" />
              
                  <div onClick={() => { onSetPassword() }}>
                    {showPass === 'password' &&
                      <AiOutlineEyeInvisible className='mx-2' />}
                    {showPass !== 'password' &&
                      <AiOutlineEye className='mx-2' />}
                  </div>
                </div>
                
                <span className="text-danger" >
                  {logerror.password}
                </span>
                <br/>
                <br/>
                <button htmlType="button" onClick= {handleSubmit} className="btn btn-success">Submit</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button htmlType="button" onClick={resetFunctions} className="btn btn-danger">Reset</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button htmlType="button" onClick={() => { closeModal(false) }} className="btn btn-secondary">Close</button>
              </form>
            </div>
          </div>
        </Modal.Body>
     
      </Modal>
    </React.Fragment>
  );
}

export default Login;


