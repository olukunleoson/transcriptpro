import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, username, onLogout }) => {
  const handleLogout = () => {
    // Logic to handle logout
    onLogout();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TranscriptPro
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isAuthenticated && ( // Show Student List link only when authenticated
              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  Manage Student
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                id="navbarDropdown"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {isAuthenticated ? `Welcome ${username}` : 'Account'}
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {isAuthenticated && ( // Show Dashboard link when authenticated
                  <>
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="dropdown-item" to="/transcript-request">
                      Transcript Request
                    </Link>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                    
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
