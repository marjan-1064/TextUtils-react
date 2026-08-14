import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <div className="container-fluid">
                {/* Fixed: to="/" instead of to="#" */}
                <Link className="navbar-brand" to="/">{props.title}</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Fixed: to="/" instead of to="#" */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <button className="btn btn-primary" style={props.style} onClick={props.handleonclick} type="button">
                            {props.myname} <i className="fa-solid fa-moon ms-1" style={props.style}></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};