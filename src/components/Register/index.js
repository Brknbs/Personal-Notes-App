import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import { toast } from 'react-toastify';

const RegisterForm = ({ dispatchRegisterAction }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: false, password: false, firstName: false, lastName: false });

  const isFormInvalid = () => (!email || !password || !firstName || lastName);

  const updateErrorFlags = () => {
    const errObj = { email: false, password: false, firstName: false, lastName: false };
    if (!email.trim()) errObj.email = true;
    if (!password.trim()) errObj.password = true;
    if (!firstName.trim()) errObj.firstName = true;
    if (!lastName.trim()) errObj.lastName = true;
    setError(errObj);
  }

  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    if (isFormInvalid()) updateErrorFlags();
    else {
      dispatch(registerUser(
        { firstName, lastName, email, password }, 
        () => toast.success('User created successfully'),
        (message) => toast.error(`Error : ${message}`)
      ));
    }
    // dispatchRegisterAction(
    //     firstName, lastName, email, password, 
    //     () => console.log('User created successfully'),
    //     (message) => console.log(`Error : ${message}`))
  };

  return (
    <div>
      <h2>New user?</h2>
      <h5>Create an account</h5>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            noValidate
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="invalid-feedback">Required</p>
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
            className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="invalid-feedback">Required</p>
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
            className={`form-control ${error.email ? 'is-invalid' : ''}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="invalid-feedback">Required</p>
        </div>

        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input 
            noValidate
            id="password1"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            className={`form-control ${error.password ? 'is-invalid' : ''}`}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="invalid-feedback">Required</p>
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

// const mapDispatchToProps = dispatch => ({
//   dispatchRegisterAction: (firstName, lastName, email, password, onSuccess, onError) => {
//     dispatch(registerUser({firstName, lastName, email, password}, onSuccess, onError));
//   }
// })

export default RegisterForm;
