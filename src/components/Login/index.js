import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: false, password: false });

  const isFormInvalid = () => (!email || !password);

  const updateErrorFlags = () => {
    const errObj = { email: false, password: false };
    if (!email.trim()) errObj.email = true;
    if (!password.trim()) errObj.password = true;
    setError(errObj);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    if (isFormInvalid()) updateErrorFlags();
    else {
      dispatch(loginUser({ email, password }, () => toast.success('Logged in succesfully'), (message) => toast.error(`Error: ${message}`)));
    } 
    // setError({ email: false, password: false });
  }

  return (
    <div>
      <h2>Have an account?</h2>
      <h5>Login here</h5>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input noValidate id="email" 
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control mb-3 ${error.email ? 'is-invalid' : ''}`} 
          />
          <p className="invalid-feedback">Required</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input noValidate id="password" 
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${error.password ? 'is-invalid' : ''}`} 
          />
          <p className="invalid-feedback">Required</p>
        </div>

        <button className="btn btn-primary" type="submit">
          Login | <i className="fas fa-sign-in-alt"></i>
        </button>
      </form>

    </div>
  )
}

export default LoginForm;
