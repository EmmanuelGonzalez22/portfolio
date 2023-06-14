    import React from "react";
    import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
            React
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
            aria-controls="navBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink
                    to="/"
                    className="nav-link"
                    activeclassname="active"
                >
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link"
                    activeclassname="active"
                >
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    to="/login"
                    className="nav-link"
                    activeclassname="active"
                >
                    Login
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }

    export { NavBar };