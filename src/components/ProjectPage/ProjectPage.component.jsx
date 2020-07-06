import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Girl from './Group 16.svg'
import Boy from './Group 15.svg'


import './ProjectPage.scss'

export default class ProjectPage extends Component {

    render() {
        return (
            <section id="projects">
                <div className="primary-heading">
                    <h3>Completed <span className="secondary-heading">Projects</span></h3>
                    <div className="border"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="test-card">
                            <OwlCarousel items={1}  
                                className="owl-theme" 
                                autoplay 
                                autoplayTimeout={5000} 
                                autoplayHoverPause={true} 
                                loop >  
                                    <div className="slider">
                                        <div className="test-card-details">
                                            <div className="test-card-company">
                                                <h4>Company Ltd Pvt</h4>
                                            </div>
                                            <div className="test-card-body">
                                                <p>Easy to use and with many design options and settings, all integrated into Divi. What more could you want? If you have any problems, the support will be happy to help you. Thumbs up!</p>
                                            </div>
                                            <div className="test-card-footer">
                                                <p>-Shareen</p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="slider">
                                        <div className="test-card-details">
                                            <div className="test-card-company">
                                                <h4>Company Ltd Pvt</h4>
                                            </div>
                                            <div className="test-card-body">
                                                <p>Easy to use and with many design options and settings, all integrated into Divi. What more could you want? If you have any problems, the support will be happy to help you. Thumbs up!</p>
                                            </div>
                                            <div className="test-card-footer">
                                                <p>--Pauline</p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="slider">                                        
                                        <div className="test-card-details">
                                            <div className="test-card-company">
                                                <h4>Company Ltd Pvt</h4>
                                            </div>
                                            <div className="test-card-body">
                                                <p>Easy to use and with many design options and settings, all integrated into Divi. What more could you want? If you have any problems, the support will be happy to help you. Thumbs up!</p>
                                            </div>
                                            <div className="test-card-footer">
                                                <p>-Vicky</p>
                                            </div>
                                        </div>
                                    </div> 
                                </OwlCarousel>
                                <div className="svg-container">
                                    <img src={Girl} alt="" id="girl"/>
                                    <img src={Boy} alt="" id="boy"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}