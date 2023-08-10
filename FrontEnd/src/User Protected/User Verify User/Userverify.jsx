import { Link, useParams} from 'react-router-dom';
import {useEffect } from 'react';
import axios from 'axios';
function Userverify() {
    const params = useParams();
    useEffect(() => {
        const Url = process.env.REACT_APP_React_Url_User;
        axios.get(Url + "fetch?email=" + params.email).then((response) => {
            if (response.data[0].__v == 0) {
                var updateDetails = { "condition_obj": { "email": params.email }, "content_obj": { "status": 1, "__v": 1 } };
                axios.patch(Url + "update", updateDetails).then((response) => {
                    console.log("User verified....");
                });
            }
        });
    }, []);

    return (
        <div>
            <Link to='/' />
        </div>
    )
}

export default Userverify;