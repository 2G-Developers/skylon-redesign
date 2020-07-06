import React,{Component} from 'react'

import DrawerCloseButton from './DrawerCloseButton.jsx'

import './SideDrawer.scss'
import Logo from './logo.png'

export default class SideDrawer extends Component {
    render(){
        let drawerClasses = 'side-drawer';
        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        
        return (
            <nav className={drawerClasses}>
                <div className="side-wrapper">
                    <div className="side-navigation">
                        <ul>
                            <li className="mb-5" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <a className="remove-hover" href="./index">
                                    <img src={Logo} width="130" height="50" className="d-inline-block align-top" alt="" />    
                                </a>
                                <DrawerCloseButton close={this.props.closeClickHandler} />
                            </li>
                            <li><a href="/" className="side-list-nav">Home</a></li>
                            <li><a href="/about" className="side-list-nav">About Us</a></li>
                            <li><a href="/services" className="side-list-nav">Services</a></li>
                            <li><a href="/gallery" className="side-list-nav">Gallery</a></li>
                            <li><a href="/index.html" className="side-list-nav">Get Free Estimate</a></li>
                            <li><a href="/index.html" className="side-list-nav">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="side-gallery">
                        <ul>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Modular Kitchen</a></li>
                            <li><a href="/">Bedroom</a></li>
                            <li><a href="/">Wardrobe</a></li>
                            <li><a href="/">Painting Works</a></li>
                            <li><p className="copyright" style={{color: "#fff", textAlign: "center", fontSize: "1.2rem", marginTop: "2rem"}}>&copy; Copyright <span className="year">{this.props.year}</span> by Skylon India</p></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        )
    }
}