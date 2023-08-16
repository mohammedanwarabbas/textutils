import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
function Navbar(props)
{

return(
<>
<nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid text-light">
    <Link className="navbar-brand" to="/">{props.logoText}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/textform">text form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
  <input onChange={props.handleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} mode</label>
</div>
      </form>
    </div>
  </div>
</nav>
</>
);
}

Navbar.propTypes = {
    logoText: PropTypes.string.isRequired
  };
export default Navbar;