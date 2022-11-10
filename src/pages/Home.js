import React, { Component } from 'react';
import Header from '../components/mainHeader';
import HeroSection from '../components/herosection';
import MainHome from '../components/mainhome';
import FairLaunch from '../components/fairlaunch';
import Tokenomics from '../components/tokenomics';
import Partners from '../components/partners';
import Footer from '../components/footer';

export default class home extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <HeroSection/>    
        <MainHome/>
        <FairLaunch/>
        <Tokenomics/>
        <Partners/>
        <Footer/>     
      </div>
      
    )
  }
}
