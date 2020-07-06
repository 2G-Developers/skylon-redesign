import React, {Component} from 'react'

import Img1 from '../../work1.jpeg'
import Img2 from '../../work2.jpeg'
import Img3 from '../../work3.jpeg'
import Img4 from '../../work4.jpeg'

import './WorkPage.scss'

export default class WorkPage extends Component {
    render() {
        return (
            <section id="work">
                <div className="primary-heading">
                    <h3>Our <span className="secondary-heading">Works</span></h3>
                    <div className="border"></div>
                </div>
                <div className="container">
                    <div className="col-md-12 text-center">
                    
                        <div className="work-wrapper">
                            <div className="work-container">
                                <a href='/gallery#kitchen'>
                                    <div className="work-item">
                                        <figure>
                                            <img src={Img1} alt=""/>
                                            <figcaption>Modular Kitchen</figcaption>
                                        </figure>
                                    </div>
                                </a>
                                <a href='/gallery#bedroom'>
                                    <div className="work-item">
                                        <figure>
                                            <img src={Img2} alt=""/>
                                            <figcaption>Bedroom</figcaption>
                                        </figure>
                                    </div>
                                </a>
                                <a href='/gallery#painting'>
                                    <div className="work-item">
                                        <figure>
                                            <img src={Img3} alt=""/>
                                            <figcaption>Painting Works</figcaption>
                                        </figure>
                                    </div>
                                </a>
                                <a href='/gallery#wardrobe'>
                                    <div className="work-item">
                                        <figure>
                                            <img src={Img4} alt=""/>
                                            <figcaption>Wardrobe</figcaption>
                                        </figure>
                                    </div>
                                </a>
                            </div>
                            <div className="work-button">
                                <button className="btn btn-danger ctaButton">View Gallery</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        )
    }
}