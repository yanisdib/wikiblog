import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav(props) {
    return (
        <nav className="navbar navbar-expand-lg p-0">
            <div className="col-3"></div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <svg
                    className="bi bi-three-dots-vertical"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className="col-5"></div>
            <div className="col-4 collapse navbar-collapse justify-content-end h-100 bg-nav" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-5 ml-5 fw-500">
                    <svg width="2.4em" height="2.4em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                    <input
                        className="form-control search-bar ml-2"
                        type="search"
                        placeholder="Search an article"
                        aria-label="Search"
                    />
                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                    <NavLink to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
                    <NavLink to="/help" className="nav-item nav-link">Help</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNav;