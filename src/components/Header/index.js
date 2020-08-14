import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const mapState = ({ user }) => ({
    isLoggedIn: user.isLoggedIn,
    username: user.fullName
  })

  const { isLoggedIn, username } = useSelector(mapState);

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <i className="fas fa-sticky-note "></i>
            <span className="h4 pl-2" style={{marginBottom: '3px'}}>BB Personal   Notes</span>
          </div>
        </Link>
       <div className="d-flex flex-direction-row">
        {isLoggedIn && 
          <h4 className="px-4">
            <span className="badge badge-pill badge-secondary text-capitalize">Welcome {username}!</span>
          </h4>}
          {isLoggedIn && 
          <button className="btn btn-outline-warning" type="button" onClick={() => dispatch(logoutUser())}>
            Logout | <i className="fas fa-sign-out-alt"></i>  
          </button>}
       </div>
      </div>
    </div>
  )
}

export default Header;
