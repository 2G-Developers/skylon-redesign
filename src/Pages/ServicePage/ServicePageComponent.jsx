import React from 'react'

import Particles from 'react-particles-js';

import Eclipse from './Ellipse 1.png'
import './ServiceStyles.scss'

function ServicePageComponent() {
    return (
        <section id="services" className="services">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="services-header">
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit animi obcaecati vel voluptatem quo officiis tempora illum, similique sint perspiciatis officia possimus libero corrupti eum adipisci amet delectus error magni! Quae voluptatibus cumque delectus ab, exercitationem voluptas accusantium aspernatur nobis, a maxime sapiente, quasi hic dolore consequuntur labore! Ipsa, veritatis?</h5>
                        <Particles
                            canvasClassName="example"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 5
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }} />
                            
                        </div>
                        <div className="services-banner">
                            <div className="services-content">
                                <p className="desc-right">Founded in the year 1996, Ocean Lifespaces India Private Limited, formerly Ocean Interiors Ltd., contracting of General Contract works including all MEP and faÃ§ade works, construction works and Design & Build works. Under the expert guidance of Mr. Peter, MD & CEO and a dedicated team, the company has expanded to become one of the best in its field. It has also perfected itself as an aesthetic combination of skill, speed, workmanship and punctuality, leveraged by a decadeâ€™s worth of experience. This, in fact, is one of the major reasons for the company to have attained the much acclaimed ISO certification, a strong domain and long-lasting business relationships with many of the major architects and clients in India.</p>
                            </div>
                            <div className="services-image">
                                <div className="img-cont">
                                    <img src={Eclipse} className="img-fluid" alt=""/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="services-banner">
                            
                            <div className="services-image content-left">
                                <div className="img-cont">
                                    <img src={Eclipse} className="img-fluid" alt=""/>
                                </div>
                                
                            </div>
                            <div className="services-content">
                                <p className="desc-left">Founded in the year 1996, Ocean Lifespaces India Private Limited, formerly Ocean Interiors Ltd., contracting of General Contract works including all MEP and faÃ§ade works, construction works and Design & Build works. Under the expert guidance of Mr. Peter, MD & CEO and a dedicated team, the company has expanded to become one of the best in its field. It has also perfected itself as an aesthetic combination of skill, speed, workmanship and punctuality, leveraged by a decadeâ€™s worth of experience. This, in fact, is one of the major reasons for the company to have attained the much acclaimed ISO certification, a strong domain and long-lasting business relationships with many of the major architects and clients in India.</p>
                            </div>
                        </div>

                        <div className="services-banner">
                            <div className="services-content">
                                <p className="desc-right">Founded in the year 1996, Ocean Lifespaces India Private Limited, formerly Ocean Interiors Ltd., contracting of General Contract works including all MEP and faÃ§ade works, construction works and Design & Build works. Under the expert guidance of Mr. Peter, MD & CEO and a dedicated team, the company has expanded to become one of the best in its field. It has also perfected itself as an aesthetic combination of skill, speed, workmanship and punctuality, leveraged by a decadeâ€™s worth of experience. This, in fact, is one of the major reasons for the company to have attained the much acclaimed ISO certification, a strong domain and long-lasting business relationships with many of the major architects and clients in India.</p>
                            </div>
                            <div className="services-image">
                                <div className="img-cont">
                                    <img src={Eclipse} className="img-fluid" alt=""/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="services-banner">
                            <div className="services-image content-left">
                                <div className="img-cont">
                                    <img src={Eclipse} className="img-fluid" alt=""/>
                                </div>
                                
                            </div>
                            <div className="services-content">
                                <p className="desc-left">Founded in the year 1996, Ocean Lifespaces India Private Limited, formerly Ocean Interiors Ltd., contracting of General Contract works including all MEP and faÃ§ade works, construction works and Design & Build works. Under the expert guidance of Mr. Peter, MD & CEO and a dedicated team, the company has expanded to become one of the best in its field. It has also perfected itself as an aesthetic combination of skill, speed, workmanship and punctuality, leveraged by a decadeâ€™s worth of experience. This, in fact, is one of the major reasons for the company to have attained the much acclaimed ISO certification, a strong domain and long-lasting business relationships with many of the major architects and clients in India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicePageComponent
