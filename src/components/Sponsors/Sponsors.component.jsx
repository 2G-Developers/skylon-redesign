import React from 'react'

import './Sponsors.scss'

import pic1 from './Aapka Painter.webp'
import pic2 from './Aristo.webp'
import pic3 from './Capella.webp'
import pic4 from './Elica.webp'
import pic5 from './Hafele.webp'
import pic6 from './idecorwale.webp'
import pic7 from './InvisibleBed.webp'
import pic8 from './Marshalls.webp'
import pic9 from './Smitch-Logo-jpg.webp'
import pic10 from './UL.webp'
import pic11 from './Faber.webp'
import pic12 from './Hettich Revised size-11-11-2.webp'

const Sponsors = () => (
    <div>
        <section className="sponsors">
            <div className="primary-heading">
                <h3>Our <span className="secondary-heading">Partners</span></h3>
                <div className="border"></div>
            </div>

            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sponsors-wrapper">
                            <img src={pic1} alt="partner 1" className="img-fluid"/>
                            <img src={pic2} alt="partner 2" className="img-fluid"/>
                            <img src={pic3} alt="partner 3" className="img-fluid"/>
                            <img src={pic4} alt="partner 4" className="img-fluid"/>
                            <img src={pic5} alt="partner 5" className="img-fluid"/>
                            <img src={pic6} alt="partner 6" className="img-fluid"/>
                            <img src={pic7} alt="partner 7" className="img-fluid"/>
                            <img src={pic8} alt="partner 8" className="img-fluid"/>
                            <img src={pic9} alt="partner 9" className="img-fluid"/>
                            <img src={pic10} alt="partner 10" className="img-fluid"/>
                            <img src={pic11} alt="partner 11" className="img-fluid"/>
                            <img src={pic12} alt="partner 12" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Sponsors;