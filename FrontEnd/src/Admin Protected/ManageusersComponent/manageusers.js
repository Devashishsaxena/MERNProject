import { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { apiurluser } from '../apiurls';
import img1 from "../assets/images/Tick.png"
import img2 from "../assets/images/cross.png"
import img3 from "../assets/images/bin.png"
function Manageusers() {
const [userDetails,setUserDetails]=useState([])
const navigate=useNavigate();
const [updatemsg,setupdatemsg]=useState([])
const [deletemsg,setdeletemsg]=useState([])
useEffect(()=>{
  axios.get(apiurluser+"fetch?role=user").then((response)=>{
setUserDetails(response.data)
  }).catch((error)=>{
   console.log(error);
  });
},[updatemsg][deletemsg])

 const manageUserStatus=(_id,s)=>{
   if(s=="block")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
     axios.patch(apiurluser+"update",updateDetails).then((response)=>{
      setupdatemsg(">>>success")
       console.log(">>",response);
      navigate("/manageusers");    
     }); 
    }
    else if(s=="verify")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
     axios.patch(apiurluser+"update",updateDetails).then((response)=>{
       console.log(">>>",response);
       setdeletemsg("delete success")

      navigate("/manageusers");   
     });
    }  
    else
    {
      let deleteDetails={"data":{"_id":_id}};  
     axios.delete(apiurluser+"delete",deleteDetails).then((response)=>{
      navigate("/manageusers");   
     });
    }
   
  };

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">view and manage user details!!!</h1>
<table class="table table-borderd">
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Address</th>
    <th>City</th>
    <th>Gender</th>
    <th>info</th>
   
    <th>Action</th>

  </tr>
  
  {
    userDetails.map((row)=>(
<tr>
  <td>{row._id}</td>
  <td>{row.name}</td>
  <td>{row.email}</td>
  <td>{row.mobile}</td>
  <td>{row.address}</td>
  <td>{row.city}</td>
  <td>{row.gender}</td>
  
  <td>{row.info}</td>
{row.status==0 && <a onClick={()=>{manageUserStatus(row._id,'verify')}}> <img src={img1} height={25} /></a>}
{row.status==1 && 
  <a onClick={()=>{manageUserStatus(row._id,'block')}}><img src={img2} height={25}/></a>}
&nbsp;&nbsp;
<a onClick={()=>{manageUserStatus(row._id,'delete')}}>
<img src={img3} height={25}/>
</a>


  
  
</tr>
    ))
  }
</table>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default Manageusers;
