import React from 'react';
import { NavLink } from 'react-router-dom';

import medical_logo1 from '../medical_logo1.svg'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <a className="navbar__title navbar-brand" href='/'>
                <img src={medical_logo1} alt='ilaaj Time' className="d-inline-block align-top"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar__links navbar-nav mr-auto">
                    <li className='nav-item'>
                        <NavLink to="/" className="navbar__link nav-link" activeClassName="active">Appointments</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/create" className="navbar__link nav-link" activeClassName="active">New Appointment</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
