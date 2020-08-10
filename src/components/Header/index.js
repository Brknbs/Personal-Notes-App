import React from 'react'

const Header = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <div className="d-flex align-items-center">
            <i className="fas fa-sticky-note "></i>
            <span className="h4 pl-2" style={{marginBottom: '3px'}}>BB Personal   Notes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
