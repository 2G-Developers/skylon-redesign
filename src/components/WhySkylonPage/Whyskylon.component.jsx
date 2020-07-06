import React,{Component} from 'react'
import WorkChat from '../../undraw_work_chat_erdt.svg'
import './Whyskylon.scss'

export default class WhySkylon extends Component {
    render() {
        return (
            <section id="why-skylon">
                <div className="primary-heading">
                    <h3>Why <span className="secondary-heading">skylon India?</span></h3>
                    <div className="border"></div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="why-wrapper">
                                <div className="why-imgContainer">
                                    <img src={WorkChat} alt="" style={{width:"100%"}} />
                                </div>
                                <div className="why-listContainer">
                                    <div className="list-container">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><span className="fa fa-check-circle" aria-hidden="true"></span>Lorem Ipsum is simply dummy text typesetting industry</li>
                                            <li className="list-group-item"><span className="fa fa-check-circle" aria-hidden="true"></span>when an unknown printer took a galley of type and</li>
                                            <li className="list-group-item"><span className="fa fa-check-circle" aria-hidden="true"></span>It is a long established fact that a reader will be</li>
                                            <li className="list-group-item"><span className="fa fa-check-circle" aria-hidden="true"></span>Facilisis in pretium nisl aliquet</li>
                                            <li className="list-group-item"><span className="fa fa-check-circle" aria-hidden="true"></span>It look like readable English. Many desktop publishing</li>
                                        </ul>
                                        <div className="why-button">
                                            <button className="btn btn-danger ctaButton">Our Services</button>
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