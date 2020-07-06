import React,{Component} from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import Logo from './logo.png'

import './Sidebar.scss'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {

    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button d-block d-md-none">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo">
                        <div className="toolbar__brand">
                            <a href="/">
                                <img src={Logo} width="130" height="50" className="d-inline-block align-top" alt="" />    
                            </a>
                        </div>
                        <div className="toolbar__contacts d-block d-md-none">
                            <a href="/index.html"><i className="fa fa-whatsapp" style={{color: "#0aff0a"}}></i></a>
                            <a href="/index.html"><i className="fa fa-phone-square" style={{color: "#07b9ff"}}></i></a>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation-items d-none d-md-block">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><Link to="/about">AboutUs</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><a href="/services">Services</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
