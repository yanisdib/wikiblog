import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="col-3">Wikiblog</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <svg className="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="col-5"></div>
            <div className="col-4 collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                    <NavLink to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
                    <NavLink to="/help" className="nav-item nav-link">Help</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNav;