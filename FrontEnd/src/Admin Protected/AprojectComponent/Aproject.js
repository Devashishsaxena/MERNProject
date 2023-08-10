import { useState } from "react";
import {apiURLCategory} from '../apiurls'
import axios from 'axios'
import { apiurlproject } from "../apiurls";

function Aproject() {

const  [ptitle,setptitle]=useState();
const  [pstrem,setProjectStream]=useState();
const [pdescription,setProjectDescription]=useState()
const [output,setOutput]=useState()
const [file,setFile]=useState()
const handleChange=(event)=>{
  setFile(event.target.files[0])
}
const handleSubmit=(events)=>{
  events.preventDefault();
  var fromData=new FormData();
  fromData.append('ptitle',ptitle)
  fromData.append('pstream',pstrem)
  fromData.append('pdescription',pdescription)
  fromData.append('file',file)
  const config={
    'content-type':'multipart/form-data'
  }
axios.post(apiurlproject+"save",fromData,config).then((response)=>{
setptitle("")
setProjectStream("")
setProjectDescription("")
setOutput("project Added Successfuly....")
})

}
  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">ADD PROJECT HERE!!</h1>

<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="ptitle">Project Title</label>
    <input type="text" class="form-control" value={ptitle} onChange={e => setptitle(e.target.value)} />
  </div>    
  <div class="form-group">
    <label for="pdescription">Project Description</label>
  <textarea class="form-control" value={pdescription} onChange={e=>setProjectDescription(e.target.value)}></textarea>
  </div>   
  <div class="form-group">
    <label for="pdoc">Project Requirment DOcument</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>   
  <div class="form-group">
    <label for="pstrem">Project Stream:</label>
    <select class="form-control" value={pstrem} onChange={e => setProjectStream(e.target.value)} >
    <option>Select Strem</option>
    <option>MERN STACK</option>
    <option>MEAN STACK</option>
    <option>PHP</option>
    <option>JAVA</option>
    </select>
  </div>
  <br/>
  
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>
              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default Aproject;
