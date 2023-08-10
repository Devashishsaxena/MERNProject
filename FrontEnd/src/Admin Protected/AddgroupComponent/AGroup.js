import { useState } from "react";
import axios from 'axios'
import { apiurlgroup } from "../apiurls";

function Aproject() {
  const [gname, setgname] = useState();
  const [output, setOutput] = useState()
  const handleSubmit = (events) => {
    events.preventDefault();
    var fromData = new FormData();
    fromData.append('gname', gname)
    const config = {
      'content-type': 'multipart/form-data'
    }
    axios.post(apiurlgroup + "save", fromData, config).then((response) => {
      setgname("")
      setOutput("project Added Successfuly....")
    })

  }
  return (
    <>
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">ADD GROUP HERE!!</h1>
            <form>
              <div class="form-group">
                <label for="pstrem">Group Name</label>
                <select class="form-control" value={gname} onChange={e => setgname(e.target.value)} >
                  <option>Select Group</option>
                  <option>GROUP 1</option>
                  <option>GROUP 2</option>
                  <option>GROUP 3</option>
                  <option>GROUP 4</option>
                  <option>GROUP 5</option>
                  <option>GROUP 6</option>
                  <option>GROUP 7</option>
                </select>
              </div>
              <br />
              <br />
              <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aproject;
