import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaCogs, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1B1A55' }}> {/* Custom navbar color */}
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', transition: 'all 0.3s', color: '#fff' }}>
              User Dashboard
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/"
                  style={{ fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', color: '#fff' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffcc00';
                    e.currentTarget.querySelector('svg').style.fill = '#ffcc00';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.querySelector('svg').style.fill = '#fff';
                  }}
                >
                  <FaHome
                    className="me-2"
                    size={24}
                    style={{
                      color: '#fff',
                      transition: 'all 0.3s',
                    }}
                  />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/adduser"
                  style={{ fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', color: '#fff' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffcc00';
                    e.currentTarget.querySelector('svg').style.fill = '#ffcc00';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.querySelector('svg').style.fill = '#fff';
                  }}
                >
                  <FaUserPlus
                    className="me-2"
                    size={24}
                    style={{
                      color: '#fff',
                      transition: 'all 0.3s',
                    }}
                  />
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/settings"
                  style={{ fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', color: '#fff' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffcc00';
                    e.currentTarget.querySelector('svg').style.fill = '#ffcc00';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.querySelector('svg').style.fill = '#fff';
                  }}
                >
                  <FaCogs
                    className="me-2"
                    size={24}
                    style={{
                      color: '#fff',
                      transition: 'all 0.3s',
                    }}
                  />
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/logout"
                  style={{ fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s', color: '#fff' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffcc00';
                    e.currentTarget.querySelector('svg').style.fill = '#ffcc00';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.querySelector('svg').style.fill = '#fff';
                  }}
                >
                  <FaSignOutAlt
                    className="me-2"
                    size={24}
                    style={{
                      color: '#fff',
                      transition: 'all 0.3s',
                    }}
                  />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
