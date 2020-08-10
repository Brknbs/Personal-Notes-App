import React, { useState } from 'react'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>New user?</h2>
      <h5>Create an account</h5>
      <br />

      <form noValidate>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            noValidate
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            noValidate
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email1">Email</label>
          <input 
            noValidate
            id="email1"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input 
            noValidate
            id="password1"
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register | <i className="fas fa-user-plus"></i>
        </button>

        {/* <button className="btn btn-outline-secondary">
          Cancel | <i className="fas fa-times"></i>
        </button> */}
      </form>
    </div>
  )
}

export default RegisterForm;
