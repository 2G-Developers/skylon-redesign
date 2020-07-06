import React from 'react'

import './HomeDesignSteps.scss'

const HomeDesignSteps = () => (
    <div>
        <section className="design-steps">
            <div className="primary-heading">
                <h3>Three Steps to Easy <span className="secondary-heading">Home Interiors</span></h3>
                <div className="border"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="design-wrapper">
                            <div className="design-wrapper-card">
                                <div className="design__icon mb-4">
                                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                </div>
                                <div className="design__title mb-2">
                                    <h5>Discover</h5>
                                </div>
                                <div className="design__content mb-2">
                                    <p>Meet your HomeLane Design Expert online or at your home or at one of our Experience Centers.</p>
                                </div>
                            </div>

                            <div className="design-wrapper-card">
                                <div className="design__icon mb-4">
                                    <i className="fa fa-gavel" aria-hidden="true"></i>
                                </div>
                                <div className="design__title mb-2">
                                    <h5>Design</h5>
                                </div>
                                <div className="design__content mb-2">
                                    <p>Co-create your interior design and get an instant quote, with our 3D visualisation tool, SpaceCraft.</p>
                                </div>
                            </div>

                            <div className="design-wrapper-card">
                                <div className="design__icon mb-4">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </div>
                                <div className="design__title mb-2">
                                    <h5>Move In</h5>
                                </div>
                                <div className="design__content mb-2">
                                    <p>Move into your newly furnished home within 45 days of finalising of your interior designs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="free-button text-center mt-5">
                            <button className="btn btn-danger ctaButton">Get Free Consoltant</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default HomeDesignSteps;