import React from 'react';

const Signup = ({setAppStateOnChange, signup, loginValues}) => {
  return (
    <div id="modal2" className="modal">
      <div className="modal-content">
        <h4>Signup</h4>
          <input type="text" name="username" value={loginValues.username} placeholder="Username" onChange={ setAppStateOnChange } />
          <input type="password" name="password" value={loginValues.password} placeholder="Password" onChange={ setAppStateOnChange } />
          <input type="text" name="fullName" value={loginValues.fullName} placeholder="Name" onChange={ setAppStateOnChange } />
          <input type="email" name="email" value={loginValues.email} placeholder="Email" onChange={ setAppStateOnChange } />
      </div>
      <div className="modal-footer">
      </div>
    </div>
  );
}

export default Signup;