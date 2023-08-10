import React from 'react';
import { Navigate } from 'react-router-dom';
function UserLogin() {
  localStorage.removeItem('token')
  localStorage.removeItem('_id')
  localStorage.removeItem('fname')
  localStorage.removeItem('lname')
  localStorage.removeItem('middle')
  localStorage.removeItem('wname')
  localStorage.removeItem('cname')
  localStorage.removeItem('land_mark')
  localStorage.removeItem('code')
  localStorage.removeItem('state')
  localStorage.removeItem('country')
  localStorage.removeItem('flat_no')
  localStorage.removeItem('email')
  localStorage.removeItem('mobile')
  localStorage.removeItem('address')
  localStorage.removeItem('city')
  localStorage.removeItem('gender')
  localStorage.removeItem('role')
  localStorage.removeItem('info')
  return (
    <React.Fragment>
      <Navigate to='/login' />
    </React.Fragment>
  );
}

export default UserLogin;