import React, { useState } from 'react'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Have an account?</h2>
      <h5>Login here</h5>
      <br />

      <form noValidate>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input noValidate id="email" 
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-3"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input noValidate id="password" 
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Login | <i className="fas fa-sign-in-alt"></i>
        </button>
      </form>

    </div>
  )
}

export default LoginForm;
