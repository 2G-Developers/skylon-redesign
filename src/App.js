import React, { Component } from 'react';

import Sidebar from './components/Sidebar/Sidebar.component'

import Footer from './components/Footer/Footer.component'
import SideDrawer from './components/SideDrawer/SideDrawer.component'
import Backdrop from './components/Backdrop/Backdrop.component'
import RootComponent from './RootComponent'
import GalleryPage from './components/GalleryPage/GalleryPage.component'
import Aboutus from './components/AboutUsPage/Aboutus.component'
import ServicePageComponent from './Pages/ServicePage/ServicePageComponent'

import {
  Route,
  Switch
} from "react-router-dom";



import './App.scss'
import VcardComponent from './components/VcardPage/Vcard.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidedrawerOpen: false,
      year: 2017
    }
  }

  componentDidMount(){
    let year = new Date().getFullYear()
    this.setState({year})
  }
  

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> ({sidedrawerOpen: !prevState.sidedrawerOpen}))
  }

  backdropClickHandler = () => {
    this.setState({sidedrawerOpen:false})
  }

  render() {
    // let sideDrawer;
    let backdrop;

    if(this.state.sidedrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App" style={{height: "100%"}}>
        <Sidebar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sidedrawerOpen} closeClickHandler={this.drawerToggleClickHandler} year={this.state.year} />
        {backdrop}

        <Switch>
          <Route exact path='/' component={RootComponent} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/about' component={Aboutus} />
          <Route path='/vcard' component={VcardComponent} />
          <Route path='/services' component={ServicePageComponent} />
        </Switch>
        
        <Footer year={this.state.year} />
      </div>
    );
  }
  
}

export default App;
