import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

import './Work.scss'



class Work extends Component {
    constructor() {
        super();

        this.state = {
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
            
        }

    }


    render() {

        let carouselItem = this.props.gallery.images.map( (item, index) => (
            <div key={index} className="work-item">
                <a href={item.image} data-lightbox={item.imageId}>
                    <img src={item.image} alt="" className="img-fluid"/>
                </a>
            </div>
        ))

        return (
            <section id={this.props.gallery.id} className="work-gallery">
                <div className="primary-heading">
                    <h3>{this.props.gallery.title}</h3>
                    <div className="border"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="work-wrapper">
                                <div className="work-description">
                                    <p>{this.props.gallery.description}</p>
                                </div>
                                <div className="work-card">
 
                                    <OwlCarousel items={3}  
                                        className="owl-theme" 
                                        autoplay 
                                        nav
                                        dots={false}
                                        margin={30}
                                        navClass={['owl-prev','owl-next']}
                                        navText={['<i style="font-size:3rem;padding:10px;background-color:#F38824;color:#fff;" class="fa fa-arrow-left" aria-hidden="true"></i>','<i style="font-size:3rem;padding:10px;background-color:#F38824;color:#fff;" class="fa fa-arrow-right" aria-hidden="true"></i>']}
                                        autoplayTimeout={3000} 
                                        autoplayHoverPause={true} 
                                        responsive={this.state.responsive}
                                        loop > 
            
                                        {carouselItem}
                                        
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
} 

export default Work;