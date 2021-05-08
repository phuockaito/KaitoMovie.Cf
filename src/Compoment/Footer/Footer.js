import React from 'react';
import './style.css';
import logo from '../../Image/logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {

    return (
        <div className="main-footer">
            <div className="group-footer">
                <div className="google-connect-container">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="group-connect">
                        <div className="email-group">
                            <i className="far fa-envelope-open" />
                            <span>huuphuocit1999@gmail.com</span>
                        </div>
                        <div className="location-group">
                            <i className="fas fa-search-location" />
                            <span>Cần Thơ City</span>
                        </div>
                        <div className="website-group">
                            <i className="fas fa-globe-americas" />
                            <a href="http://KaitoShop.cf/" target="_blank" rel="noopener noreferrer">KaitoShop.cf</a>
                        </div>
                    </div>
                </div>
                <div className="google-maps-container">
                    <iframe
                        style={{
                            'width': "100%",
                            "height": "40vh",
                            'style': "border:0;",
                            'allowfullscreen': "",
                            'loading': "lazy"
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61223.64153907491!2d105.72255072982045!3d10.03418511382869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1615211231924!5m2!1svi!2s"></iframe>
                </div>
            </div>
        </div>
    )
}