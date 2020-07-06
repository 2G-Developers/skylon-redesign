import React,{Component} from 'react'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="footer-nav">
                    <li className="footer-nav--item">
                        <a href="/" className="footer-nav--link">Home</a>
                    </li>
                    <li className="footer-nav--item">
                        <a href="/about" className="footer-nav--link">About Us</a>
                    </li>
                    <li className="footer-nav--item">
                        <a href="/" className="footer-nav--link">Services</a>
                    </li>
                    <li className="footer-nav--item">
                        <a href="/" className="footer-nav--link">Get Free Consultant</a>
                    </li>
                    <li className="footer-nav--item">
                        <a href="/" className="footer-nav--link">Contact Us</a>
                    </li>
                    <li className="footer-nav--item">
                        <a href="/" className="footer-nav--link">Come work with us</a>
                    </li>
                </ul>

        <p className="copyright">&copy; Copyright <span>{this.props.year}</span> by Skylon India</p>
            </footer>
        )
    }
}