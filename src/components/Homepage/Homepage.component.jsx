import React, { Component } from 'react'
import './Homepage.scss';

export default class Homepage extends Component {
    render() {
        return (
            <section id="homepage">
                <div className="container-fluid p-0">
                    <div className="row mx-0">
                        <div className="col-md-12 p-0">
                            <div className="fullwidth-img"></div>
                            
                            <div className="wrapper">
                            
                                <div className="text-container">
                                    <div className="home-heading">
                                        <h3><span>Build it Beautiful Unparallel</span></h3>
                                    </div>
                                    <div className="home-button">
                                        <button className="btn btn-danger ctaButton">Get Free Consultant</button>
                                    </div>

                                    <div className="home-button d-block d-md-none">
                                        <button type="button" className="btn btn-danger ctaButton" data-toggle="modal" data-target="#contact-modal">Contact Us</button>
                                    </div>
                                    {/* Modal Start */}
                                    <div className="modal" data-backdrop="" id="contact-modal" role="dialog" style={{height: "360px"}}>
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header text-center">
                                                    <h5 className="modal-title" id="exampleModalLabel">Meet Our Designer</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body px-5">
                                                    <form>
                                                        <div className="form-group pb-3">
                                                            <input type="text" className="form-control" placeholder="Full Name" />
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="text" className="form-control" placeholder="E-Mail" />
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="text" className="form-control" placeholder="Phone No" />
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="text" className="form-control" placeholder="City" />
                                                        </div>
                                                        <div className="form-group pb-3">
                                                            <input type="text" className="form-control" placeholder="Pincode" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="submit" id="formsubmit" className="btn btn-block btn-success" />
                                                        </div>
                                                        <button type="button" className="btn btn-danger btn-block mb-5" data-dismiss="modal">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal End */}
                                </div>
                                <div className="all-wrapper">
                                    <a type="button" data-toggle="modal"  data-backdrop="false" href="#offerModal" style={{width: "100%", textDecoration: "none"}}>
                                
                                        <div className="offers-wrapper">
                                            <div className="discount-button">
                                                Save Upto <span className="discount-number">50%</span>
                                            </div>
                                            <div className="discount-text">
                                                Black Friday
                                            </div>
                                        </div>
                                    </a>
                                    {/* Modal */}
                                    <div className="modal" id="offerModal" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                            <div className="modal-body">
                                                <img className="img-fluid" src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt=""/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal End */}
                                    <div className="form-card d-none d-md-block">
                                        <div className="card" style={{width: "40rem"}}>
                                            <div className="card-body">
                                                <h3 className="text-center mb-5">Meet Our Designer</h3>
                                                <form>
                                                    <div className="form-group pb-3">
                                                        <input type="text" className="form-control" placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-group pb-3">
                                                        <input type="text" className="form-control" placeholder="E-Mail" />
                                                    </div>
                                                    <div className="form-group pb-3">
                                                        <input type="text" className="form-control" placeholder="Phone No" />
                                                    </div>
                                                    <div className="form-group pb-3">
                                                        <input type="text" className="form-control" placeholder="City" />
                                                    </div>
                                                    <div className="form-group pb-3">
                                                        <input type="text" className="form-control" placeholder="Pincode" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="submit" id="formsubmit" className="btn btn-block btn-danger" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}