import React from 'react';
import './vcard.scss';

import User1 from '../AboutUsPage/user1.jpg'
import Logo from './logo.png'

const VcardComponent = () => {
    return (
        <section className="vcard-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='vcard'>
                            <div className="vcard-profile">
                                <div className="vcard-image">
                                    <img src={User1} alt="" className="img-fluid"/>
                                </div>
                                
                            </div>
                            
                            <div className="vcard-info">
                                <div className="vcard-name">
                                    <h5>Lorem, ipsum.</h5>
                                    <p>Product Manager</p>
                                </div>
                                <div className="vcard-logo">
                                    <img src={Logo} alt="" width="130" height="50"/>
                                </div>
                            </div>

                            <div className="vcard-services">
                                <h4>Services</h4>
                                <h6>Flat Promotion | Civil Construction</h6>
                            </div>

                            <div className="vcard-border"></div>

                            <div className="vcard-links">
                                <div className="vcard-link">
                                    <div className="vcard-mobile">
                                        <i className="fa fa-phone" style={{color: "#00aff0"}}></i>
                                        <p>+918939244089</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                                <div className="vcard-link">
                                    <div className="vcard-facebook">
                                        <i className="fa fa-facebook" style={{color: "#3b5998", marginRight: "1rem"}}></i>
                                        <p>Facebook</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                                <div className="vcard-link">
                                    <div className="vcard-instagram">
                                        <i className="fa fa-instagram" style={{color: "#ff4500"}}></i>
                                        <p>Instagram</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                                <div className="vcard-link">
                                    <div className="vcard-email">
                                        <i className="fa fa-envelope-o" style={{color: "#ea4335",fontSize: "3.5rem"}}></i>
                                        <p>Email</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                                <div className="vcard-link">
                                    <div className="vcard-whatsapp">
                                    <i className="fa fa-whatsapp" style={{color: "#43d854"}}></i>
                                    <p>whatsapp</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                                <div className="vcard-link">
                                    <div className="vcard-website">
                                        <i className="fa fa-globe" style={{color: "#124ace"}}></i>
                                        <p>www.skylon.com</p>
                                    </div>
                                    <div className="vcard-external">
                                        <i className="fa fa-location-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VcardComponent