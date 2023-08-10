import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';
function CPadmin() {
  const [opassword, setOldPassword] = useState();
  const [npassword, setNEWPassword] = useState();
  const [cnpassword, setCONFIRMENEWPassword] = useState();
  const [output, setOutput] = useState("");
  const handleSubmit = () => {
    axios.get(apiurluser + "fetch?email=" + localStorage.getItem("email") + "&password=" + opassword).then((response) => {
      if (response.data.length != 0) {
        if (npassword == cnpassword) {
          let updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpassword } };
          axios.patch(apiurluser + "update", updateDetails).then((response) => {
            setOutput("password change succesfully")
            setOldPassword("")
            setNEWPassword("")
            setCONFIRMENEWPassword("")
          })
        }
        else {
          setOutput("new and conforme new password mismatch")
          setNEWPassword("")
          setCONFIRMENEWPassword("")
        }
      }

    }).catch((error) => {
      setOutput("invalid old password")

      setCONFIRMENEWPassword("")
    });

  };


  return (
    <>
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Change Password Here!!!</h1>
            <font color="blue">{output}</font>
            <form>


              <br />
              <div class="form-group">
                <label for="opwd">OLD Password:</label>
                <input type="password" class="form-control" value={opassword} onChange={e => setOldPassword(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="npwd"> NEW Password:</label>
                <input type="password" class="form-control" value={npassword} onChange={e => setNEWPassword(e.target.value)} />
              </div>
              <br></br>
              <div class="form-group">
                <label for="npwd"> Confirme NEW Password:</label>
                <input type="password" class="form-control" value={cnpassword} onChange={e => setCONFIRMENEWPassword(e.target.value)} />
              </div>
              <br></br>
              <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPadmin;
