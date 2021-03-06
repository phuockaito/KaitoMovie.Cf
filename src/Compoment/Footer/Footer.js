import React from 'react';
import './style.css';
import logo from '../../Image/logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {

    return (
        <div className="main-footer">
            <div className="group-footer">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="group-connect">
                    <div className="email-group">
                        <i className="far fa-envelope-open" />
                        <span>huuphuocit1999@gmail.com</span>
                    </div>
                    <div className="location-group">
                        <i className="fas fa-search-location"/>
                        <span>Cần Thơ City</span>
                    </div>
                    <div className="website-group">
                        <i className="fas fa-globe-americas"/>
                        <a href="kaitoshop.cf" target="_blank" rel="noopener noreferrer">
                            KaitoShop.cf
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}